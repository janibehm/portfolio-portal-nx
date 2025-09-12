import { client } from "../lib/sanity/clients";
import { urlFor, SanityImageSource } from "../lib/sanity/sanityImage";
import { createParser } from "../lib/parser-config";
import { RawProject, ProcessedProject } from "../types/project";

const projectParser = createParser({
    title: 'string',
    description: 'string',
    image: {
        _type: 'string',
        asset: {
            _type: 'string',
            _ref: 'string'
        }
    },
    githubLink: 'string',
    liveLink: 'string'
});

export async function fetchProjects(): Promise<ProcessedProject[]> {
    const query = `*[_type == "project"]{
        title,
        description,
        image,
        githubLink,
        liveLink
    }`;
    
    const projects: RawProject[] = await client.fetch<RawProject[]>(query);
    
    return Promise.all(
        projects.map(async (project: RawProject): Promise<ProcessedProject> => {
            // Parse and validate the project data
            const parsedProject = await projectParser(project);
            
            // Check that required fields are present
            if (!parsedProject.title || !parsedProject.description || !parsedProject.image || 
                !parsedProject.githubLink || !parsedProject.liveLink) {
                throw new Error(`Invalid project data: missing required fields`);
            }

            // Cast to required types after validation
            const validatedProject = parsedProject as Required<typeof parsedProject>;
            
            return {
                title: validatedProject.title,
                description: validatedProject.description,
                src: urlFor(validatedProject.image as SanityImageSource).width(400).height(400).format('webp').url(),
                alt: validatedProject.title,
                githubLink: validatedProject.githubLink,
                liveLink: validatedProject.liveLink
            };
        })
    );
}
