import React from 'react'

function ProjectCard() {
    interface GitHubProject {
        name: string;
        link: string;
        description?: string;
        seeCode: string
        playGame? : string
      }
      interface Props {
        project: GitHubProject;
      }
  return (
    <div>

    </div>
  )
}

export default ProjectCard