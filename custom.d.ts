declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>
  export default content
}

declare module '*.module.css' {
  const classes: { [key: string]: string }
  export default classes
}
