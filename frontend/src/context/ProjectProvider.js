import React, { useState } from 'react';
import { ProjectContext } from './contexts';
import * as api from '../api/projectApi';

const ProjectProvider = props => {
  const [projects, setProjects] = useState([]);

  // Queries

  const getProjects = challengePath =>
    api.useGetProjects({
      variables: { challengePath },

      onSuccess: data => setProjects(data.data)
    });

  // Mutations

  const createProject = challengePath =>
    api.useCreateProject({
      variables: { challengePath },

      onSuccess: data => {
        const updatedProjects = [...projects, data.data];

        setProjects(updatedProjects);
      }
    });

  return (
    <ProjectContext.Provider value={{ projects, getProjects, createProject }}>
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;