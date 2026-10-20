// State: activeFilter (string)
// Purpose: Track which project category is currently selected

import { useState } from 'react';

const projects = [
    {
        id: 1,
        title: 'Serum Albumin & Cardiovascular Disease Genomic Analysis',
        category: 'Statistical Genetics',
        categories: ['research'],
        featured: true,
        description: 'A modern e-commerce platform built with React and Node.js, featuring shopping cart, payment integration, and admin dashboard.',
        image: 'https://via.placeholder.com/400x250/4f46e5/ffffff?text=E-Commerce+App',
        imageAlt: 'E-Commerce Platform',
        tags: ['GWAS', 'Mendelian Randomization', 'R', 'Meta-Analysis']
    },
    {
        id: 2,
        title: 'Protein Structural-Functional Analysis',
        category: 'Structural Biochemistry',
        categories: ['research'],
        featured: false,
        description: 'Studying protein structure-function relationships and substrate interactions by combining experimental structural biology with computational modeling.',
        image: 'https://via.placeholder.com/400x250/059669/ffffff?text=Weather+App',
        imageAlt: 'Weather Dashboard',
        tags: ['Biochemical Assays', 'Molecular Dynamics', 'Molecular Modeling']
    },
    {
        id: 3,
        title: 'Mixed Reality Brain Sensor Positioning',
        category: 'Health Tech',
        categories: ['healthtech'],
        featured: false,
        description: 'Developed a mixed-reality approach to simplify brain sensor positioning, reducing setup time.',
        image: 'https://via.placeholder.com/400x250/dc2626/ffffff?text=Task+Manager',
        imageAlt: 'Task Management App',
        tags: ['Mixed Reality', 'Computer Vision', 'JavaScript']
    },
    {
        id: 4,
        title: 'Virtual Lab for Personalized Microbiome Therapeutics',
        category: 'Health Tech',
        categories: ['healthtech', 'simulation'],
        featured: false,
        description: 'Developing a computational virtual lab for exploring personalized microbiome therapeutics as part of my UC Berkeley MEng capstone.',
        image: 'https://via.placeholder.com/400x250/7c3aed/ffffff?text=Portfolio+Site',
        imageAlt: 'Portfolio Website',
        tags: ['Microbiome', 'Agent-Based Modeling', 'Simulation']
    }
];

function Projects() {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.categories.includes(activeFilter));

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2>Featured Projects</h2>

                {/* Filter Buttons */}
                <div className="filter-buttons">
                    <button
                        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('all')}
                    >
                        All
                    </button>

                    <button
                        className={`filter-btn ${activeFilter === 'research' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('research')}
                    >
                        Research
                    </button>

                    <button
                        className={`filter-btn ${activeFilter === 'healthtech' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('healthtech')}
                    >
                        Health Tech
                    </button>

                    <button
                        className={`filter-btn ${activeFilter === 'simulation' ? 'active' : ''}`}
                        onClick={() => setActiveFilter('simulation')}
                    >
                        Simulation
                    </button>
                </div>

                <div className="projects-grid">
                    {filteredProjects.map(project => (
                        <div
                            key={project.id}
                            className={`project-card ${project.featured ? 'featured' : ''}`}
                        >
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.imageAlt}
                                />

                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a href="#" className="project-link">
                                            <span>🔗</span> Learn More
                                        </a>
                                        <a href="#" className="project-link">
                                            <span>💻</span> Code
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>
                                    <span className="project-category">
                                        {project.category}
                                    </span>
                                </div>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;