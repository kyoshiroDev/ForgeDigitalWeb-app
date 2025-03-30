export interface Projets {
  id:number,
  image: string,
  alt: string,
  titre: string,
  description: string,
  languages: ('HTML' | 'CSS' | "JavaScript" | "bootstrap" | "React" | "Next.Js" | "Angular" | "Tailwind")[],
  buttonSite: string,
  buttonGithub: string
}
