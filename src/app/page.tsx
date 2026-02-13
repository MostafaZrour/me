"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Github, Download } from "lucide-react";
import { Navbar } from "@/components/navbar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowRight as ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { ThemeSparkles } from "@/components/ui/ThemeSparkles";

export default function Page() {
  const [showMoreCerts, setShowMoreCerts] = useState(false);
  const [visibleProjectCount, setVisibleProjectCount] = useState(6);
  const [visibleCertCount, setVisibleCertCount] = useState(8);

  const projects = [
    {
      title: "Boutique en ligne",
      description: "Boutique en ligne moderne de vêtements et accessoires",
      content:
        "Découvrez nos collections été et hiver, profitez de promotions incroyables, livraison gratuite, assistance 24/7, et économisez jusqu’à 70% sur vos articles préférés.",
      link: "https://mostafazrour.github.io/Bootstrap-Ecommerce/",
      technologies: [
        { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg" },
        { name: "Bootstrap", icon: "/icons/bootstrap-fill-svgrepo-com.svg" },
        { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
        { name: "Prettier", icon: "/icons/prettier-svgrepo-com.svg" },
        { name: "Bash", icon: "/icons/bash-icon-svgrepo-com.svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
      ],
    },
    {
      title: "Portfolio WebSite",
      description: "Portfolio moderne construit avec React.js et Tailwind CSS",
      content:
        "Un portfolio réactif et animé présentant mes projets et compétences",
      link: "https://github.com/MostafaZrour/portfolio",
      technologies: [
        { name: "React", icon: "/icons/react-svgrepo-com.svg" },
        { name: "Next.js", icon: "/icons/nextjs-icon-svgrepo-com.svg" },
        { name: "TypeScript", icon: "/icons/typescript-svgrepo-com.svg" },
        { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
        { name: "NPM", icon: "/icons/npm.svg" },
        { name: "Prettier", icon: "/icons/prettier-svgrepo-com.svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
      ],
    },
    {
      title: "Système de Réservation d’Hôtel",
      description:
        "Application de gestion des réservations d’hôtel avec gestion des clients, chambres et utilisateurs",
      content:
        "Un système complet permettant de gérer les clients, les chambres, les réservations, les tarifs et les utilisateurs, avec une base de données relationnelle optimisée.",
      link: "https://github.com/MostafaZrour/hotel-management",
      technologies: [
        { name: "php", icon: "/icons/php-1-logo-svgrepo-com.svg" },
        { name: "bootstrap", icon: "/icons/bootstrap-fill-svgrepo-com.svg" },
        { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
      ],
    },
    {
      title: "AI Course Recommendation",
      description:
        "Application intelligente de recommandation de cours basée sur l’Intelligence Artificielle",
      content:
        "Plateforme web qui analyse le profil de l’utilisateur (niveau, intérêts, historique) afin de proposer automatiquement les meilleurs cours à suivre.",
      link: "https://github.com/MostafaZrour/ai-course-recommendation",
      technologies: [
        { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
        { name: "React", icon: "/icons/react-svgrepo-com.svg" },
        { name: "Redux-toolKit", icon: "/icons/redux-svgrepo-com.svg" },
        { name: "MySQL", icon: "/icons/mysql-logo-svgrepo-com.svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
      ],
    },
    {
      title: "PHP CRUD MVC ",
      description:
        "Projet simple en PHP MVC pour créer, lire, modifier et supprimer des utilisateurs avec une architecture claire",
      content:
        "Une application CRUD complète utilisant le modèle MVC, permettant de gérer efficacement les données utilisateurs avec PHP et MySQL.",
      link: "https://github.com/fernand3z/my-webview-app",
      technologies: [
        { name: "php", icon: "/icons/php-1-logo-svgrepo-com.svg" },
        { name: "bootsrap", icon: "/icons/bootstrap-fill-svgrepo-com.svg" },
        { name: "JavaScript", icon: "/icons/javascript-svgrepo-com.svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
      ],
    },
    {
      title: "Laravel Medium Clone",
      description: "Un projet clone de Medium, développé avec Laravel",
      content:
        "Les utilisateurs peuvent publier des articles, ajouter des images, et interagir. Fonctionnalités: authentification, création/édition/suppression d'articles, upload d'images avec Spatie Media Library, affichage avec pagination, et interactions entre utilisateurs.",
      link: "https://github.com/MostafaZrour/Laravel-Medium-Clone",
      technologies: [
        { name: "Laravel", icon: "/icons/laravel-1-logo-svgrepo-com.svg" },
        { name: "PHP", icon: "/icons/php-1-logo-svgrepo-com.svg" },
        { name: "Tailwind", icon: "/icons/tailwind-svgrepo-com.svg" },
        { name: "MySQL", icon: "/icons/mysql-logo-svgrepo-com.svg" },
        { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
        { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
      ],
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content:
        "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning",
      technologies: [],
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content:
        "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning",
      technologies: [],
    },
    {
      title: "Coming Soon",
      description: "Future project planned",
      content:
        "Another exciting project in the pipeline. Stay tuned for updates!",
      status: "In Planning",
      technologies: [],
    },
  ];

  const handleShowMoreProjects = () => {
    if (visibleProjectCount >= projects.length) {
      setVisibleProjectCount(6); // Reset to initial count of 6
    } else {
      setVisibleProjectCount((prev) => Math.min(prev + 3, projects.length));
    }
  };

  const showingAllProjects = visibleProjectCount >= projects.length;

  const handleShowMoreCerts = () => {
    if (visibleCertCount >= 12) {
      // Total number of certificates
      setVisibleCertCount(4); // Reset to initial count
    } else {
      setVisibleCertCount((prev) => Math.min(prev + 4, 12));
    }
  };

  const showingAllCerts = visibleCertCount >= 12;

  const handleContact = (platform: string) => {
    switch (platform) {
      case "gmail":
        window.location.href = "mailto:moustazro123@gmail.com";
        break;
      case "whatsapp":
        window.location.href = "https://wa.me/+212682879516";
        break;
      case "linkedin":
        window.location.href = "https://www.linkedin.com/in/mostafazrour/";
        break;
    }
  };

  return (
    <div className="relative min-h-screen">
      <ThemeSparkles />
      <div className="relative min-h-screen bg-transparent">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Hero Section */}
          <section id="about" className="mb-24 text-center">
            <h1 className="text-[60px] font-bold mb-4 gradient-text animate-fade-in">
              Zrour Mostafa
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in delay-200">
              Développeur passionné, avec un talent pour résoudre des problèmes
              complexes par le code. Principalement autodidacte, animé par une
              grande curiosité pour explorer et maîtriser de nouvelles
              technologies.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="default"
                    className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  >
                    Contact Me!
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  <DropdownMenuLabel>Get in touch</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem onClick={() => handleContact("gmail")}>
                      <Mail className="mr-2 h-4 w-4" />
                      <span>Email</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleContact("whatsapp")}>
                      <MessageSquare className="mr-2 h-4 w-4" />
                      <span>WhatsApp</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleContact("linkedin")}>
                      <Github className="mr-2 h-4 w-4" />
                      <span>LinkedIn</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="default"
                className="bg-success hover:bg-success/90 text-success-foreground animate-fade-in delay-300 hover-lift"
                asChild
              >
                <a
                  href="https://github.com/MostafaZrour"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubLogoIcon className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Compétences et Technologies
            </h2>
            <div className="card-spotify rounded-lg p-4">
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
                {/* Column 1 - Programming Languages */}
                <div className="animate-slide-in delay-100">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "HTML", icon: "/icons/html-5-svgrepo-com.svg" },
                      { name: "CSS", icon: "/icons/css-svgrepo-com.svg" },
                      {
                        name: "JavaScript",
                        icon: "/icons/javascript-svgrepo-com.svg",
                      },
                      {
                        name: "TypeScript",
                        icon: "/icons/typescript-svgrepo-com.svg",
                      },
                      { name: "Python", icon: "/icons/python-svgrepo-com.svg" },
                    ].map(
                      (tech: { name: string; icon: string }, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="text-xs md:text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Column 2 - Frontend Frameworks */}
                <div className="animate-slide-in delay-200">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "React", icon: "/icons/react-svgrepo-com.svg" },
                      {
                        name: "BOOTSTRAP",
                        icon: "/icons/bootstrap-fill-svgrepo-com.svg",
                      },
                      {
                        name: "Tailwind",
                        icon: "/icons/tailwind-svgrepo-com.svg",
                      },
                      { name: "NPM", icon: "/icons/npm-svgrepo-com.svg" },
                      {
                        name: "WordPress",
                        icon: "/icons/wordpress-color-svgrepo-com.svg",
                      },
                    ].map(
                      (tech: { name: string; icon: string }, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="text-xs md:text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Column 3 - Backend & Databases */}
                <div className="animate-slide-in delay-300">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        name: "LARAVEL",
                        icon: "/icons/laravel-1-logo-svgrepo-com.svg",
                      },
                      {
                        name: "PHP",
                        icon: "/icons/php-1-logo-svgrepo-com.svg",
                      },
                      {
                        name: "MongoDB",
                        icon: "/icons/mongodb-svgrepo-com.svg",
                      },
                      {
                        name: "MYSQL",
                        icon: "/icons/mysql-logo-svgrepo-com.svg",
                      },
                    ].map(
                      (tech: { name: string; icon: string }, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="text-xs md:text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Column 4 - DevOps & Cloud */}
                <div className="animate-slide-in delay-400">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      { name: "Git", icon: "/icons/git-svgrepo-com.svg" },
                      { name: "GitHub", icon: "/icons/github-svgrepo-com.svg" },
                      { name: "GitLab", icon: "/icons/gitlab-svgrepo-com.svg" },
                      {
                        name: "Docker",
                        icon: "/icons/docker-svgrepo-com(1).svg",
                      },
                    ].map(
                      (tech: { name: string; icon: string }, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="text-xs md:text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
                {/* Column 6 - Development Tools */}
                <div className="animate-slide-in delay-600">
                  <div className="space-y-2 md:space-y-4">
                    {[
                      {
                        name: "VS Code",
                        icon: "/icons/vscode-svgrepo-com.svg",
                      },
                      {
                        name: "Terminal",
                        icon: "/icons/terminal-svgrepo-com.svg",
                      },
                      {
                        name: "PowerShell",
                        icon: "/icons/powershell-svgrepo-com.svg",
                      },
                      {
                        name: "Bash",
                        icon: "/icons/bash-icon-svgrepo-com.svg",
                      },
                    ].map(
                      (tech: { name: string; icon: string }, index: number) => (
                        <div key={index} className="flex items-center gap-2">
                          <Image
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            width={20}
                            height={20}
                            className="w-5 h-5"
                          />
                          <span className="text-xs md:text-sm font-medium text-foreground">
                            {tech.name}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Projets de développement
            </h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .slice(0, visibleProjectCount)
                  .map((project, index) => (
                    <Card
                      key={index}
                      className={`hover-lift flex flex-col ${
                        !project.link ? "opacity-75" : ""
                      }`}
                    >
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-[0.75em]">
                          {project.content}
                        </p>
                        {project.technologies &&
                          project.technologies.length > 0 && (
                            <div className="flex gap-2 mt-4">
                              {project.technologies.map((tech, techIndex) => (
                                <div key={techIndex} className="relative group">
                                  <Image
                                    src={tech.icon}
                                    alt={`${tech.name} icon`}
                                    width={20}
                                    height={20}
                                    className="w-5 h-5"
                                  />
                                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-popover text-popover-foreground rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {tech.name}
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                      </CardContent>
                      <CardFooter className="mt-auto">
                        {project.link ? (
                          <div className="flex flex-row w-full space-x-2">
                            <Button
                              asChild
                              variant="outline"
                              className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                View on GitHub{" "}
                                <ArrowRightIcon className="ml-2 h-4 w-4" />
                              </a>
                            </Button>
                            {project.title === "Devlogz Blog App" && (
                              <Button
                                asChild
                                variant="outline"
                                className="mt-4 text-foreground hover:text-success hover:border-success transition-colors"
                              >
                                <a
                                  href="https://github.com/fernand3z/my-webview-app/releases/download/v1.0.0/devlogzv1.0.0.apk"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Download className="h-[18px] w-[18px]" />
                                </a>
                              </Button>
                            )}
                          </div>
                        ) : (
                          <span className="text-muted-foreground inline-flex items-center space-x-1">
                            {project.status} →
                          </span>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
              </div>

              {/* Show More/Less Projects Button */}
              {visibleProjectCount < projects.length ? (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleShowMoreProjects}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show More</span>
                      <span className="transform transition-transform duration-200">
                        ↓
                      </span>
                    </div>
                  </button>
                </div>
              ) : (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={handleShowMoreProjects}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show Less</span>
                      <span className="transform transition-transform duration-200 rotate-180">
                        ↓
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </section>
          {/* Education Section */}
          <section id="education" className="mb-24 animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Formation et apprentissage
            </h2>
            <div className="space-y-6">
              {/* OFPPT */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a
                        href="https://www.ofppt.ma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image
                          src="/ofppt-logo.png"
                          alt="OFPPT Logo"
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1"
                        />
                      </a>
                    </div>

                    <div>
                      <a
                        href="https://www.ofppt.ma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>
                          Stagiaire en Développement Digital
                        </CardTitle>
                      </a>

                      <CardDescription>
                        <span className="block text-muted-foreground">
                          OFPPT Ouled Teima
                        </span>
                        <span className="block text-sm text-muted-foreground/60">
                          2023 - 2025
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 mt-2 rounded-full text-xs font-medium bg-success/10 text-success">
                          Terminé
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* ESTSB */}
              <Card className="hover-lift">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-card">
                      <a
                        href="https://www.estsb.ac.ma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer transition-opacity hover:opacity-80"
                      >
                        <Image
                          src="/estsblogo.png"
                          alt="ESTSB Logo"
                          width={48}
                          height={48}
                          className="w-full h-full object-contain p-1"
                        />
                      </a>
                    </div>

                    <div>
                      <a
                        href="https://www.estsb.ac.ma"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        <CardTitle>
                          Étudiant en Ingénierie des Systèmes Informatiques
                        </CardTitle>
                      </a>

                      <CardDescription>
                        <span className="block text-muted-foreground">
                          ESTSB Agadir
                        </span>
                        <span className="block text-sm text-muted-foreground/60">
                          2025 - 2026
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 mt-2 rounded-full text-xs font-medium bg-success/10 text-success">
                          Actuel
                        </span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>
          </section>

          {/* License & Certifications Section */}
          <section id="certifications" className="animate-fade-in">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
              Licences et Certifications
            </h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First 4 certificates are always visible */}
                {/* Additional certificates are shown based on visibleCertCount */}
                {[
                  {
                    title: "Introduction to Cybersecurity",
                    type: "Professional Certificate",
                    photo: "/cybersecurity.png",
                    issuer: "cisco",
                    date: "2023",
                    link: "https://www.credly.com/badges/69579dfe-4bce-40b6-94e4-8abd2d18b7f6/public_url",
                    providers: [
                      {
                        name: "cisco",
                        url: "https://cisco.com",
                        icon: "/cisco.svg",
                      },
                    ],
                  },
                  {
                    title: "Computer Hardware Basics",
                    type: "Professional Certificate",
                    photo: "/hardware.png",
                    issuer: "Cisco",
                    date: "2023",
                    link: "https://www.credly.com/badges/d739e9f4-1c60-47f0-a3a2-d13fe35794da/public_url",
                    providers: [
                      {
                        name: "cisco",
                        url: "https://cisco.com",
                        icon: "/cisco.svg",
                      },
                    ],
                  },
                  {
                    title: "Python Essentials 1",
                    type: "Professional Certificate",
                    photo: "/python.png",
                    issuer: "Cisco",
                    date: "2023",
                    link: "https://www.credly.com/badges/2a5b1e5a-908e-45f2-b53b-d9a0854af3d3/public_url",
                    providers: [
                      {
                        name: "cisco",
                        url: "https://cisco.com",
                        icon: "/cisco.svg",
                      },
                    ],
                  },
                ]
                  .slice(0, visibleCertCount)
                  .map((cert, index) => (
                    <div
                      key={index}
                      className={`card-spotify p-4 rounded-lg hover-lift animate-scale-in delay-${
                        ((index % 4) + 1) * 100
                      } flex flex-col`}
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Image
                            src={cert.photo}
                            alt="Logo"
                            width={24}
                            height={24}
                            className="w-6 h-6 object-contain"
                          />
                          <h3 className="text-xl font-bold text-foreground">
                            {cert.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <p className="text-muted-foreground text-[0.6em]">
                            {cert.type}
                          </p>
                          <span className="text-muted-foreground text-[0.6em]">
                            •
                          </span>
                          <p className="text-muted-foreground text-[0.6em]">
                            {cert.issuer}
                          </p>
                          <span className="text-muted-foreground text-[0.6em]">
                            •
                          </span>
                          <p className="text-muted-foreground text-[0.6em]">
                            {cert.date}
                          </p>
                        </div>
                      </div>
                      <div className="mt-auto pt-4 flex justify-between items-center">
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-1 transition-colors group text-[0.75em]"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            View Certificate
                          </span>
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            →
                          </span>
                        </a>
                        <div className="flex gap-2">
                          {cert.providers.map((provider, i) => (
                            <a
                              key={i}
                              href={provider.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-6 h-6 opacity-70 hover:opacity-100 transition-opacity flex items-center justify-center"
                            >
                              <Image
                                src={provider.icon}
                                alt={`${provider.name} logo`}
                                width={24}
                                height={24}
                                className="w-6 h-6 object-contain"
                                quality={100}
                                unoptimized
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Show More/Less Certificates Button */}
              {visibleCertCount < 12 && (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowMoreCerts}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show More</span>
                      <span className="transform transition-transform duration-200">
                        ↓
                      </span>
                    </div>
                  </button>
                </div>
              )}

              {/* Show Less Button - only visible when all certificates are shown */}
              {showingAllCerts && (
                <div className="flex justify-center">
                  <button
                    onClick={handleShowMoreCerts}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center space-x-2 transition-colors group"
                  >
                    <div className="flex items-center space-x-2 group-hover:translate-y-[-2px] transition-transform duration-200">
                      <span>Show Less</span>
                      <span className="transform transition-transform duration-200 rotate-180">
                        ↓
                      </span>
                    </div>
                  </button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
