import { TbBrandKotlin, TbBrandNextjs, TbBrandPrisma } from 'react-icons/tb'
import {
  BiLogoAws,
  BiLogoFigma,
  BiLogoGraphql,
  BiLogoJava,
  BiLogoKubernetes,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoTypescript,
  BiMobileAlt,
} from 'react-icons/bi'

export default function TechList() {
  return (
    <ul
      className="grid grid-cols-3 items-center justify-center gap-8 rounded-lg border border-solid border-gray-500 p-8 md:grid-cols-5">
      <li className="flex flex-col items-center">
        <TbBrandNextjs size={30} />
        <p className="text-pretty text-center">Next.js</p>
      </li>
      <li className="flex flex-col items-center">
        <BiLogoReact size={30} />
        <p className="text-pretty text-center">React.js</p>
      </li>
      <li className="flex flex-col items-center">
        <div className="relative">
          <BiLogoReact className="absolute inset-0 m-auto" size={20} />
          <BiMobileAlt size={30} />
        </div>
        <p className="text-pretty text-center">React Native</p>
      </li>
      <li className="flex flex-col items-center">
        <BiLogoNodejs size={30} />
        <p className="text-pretty text-center">Node.js</p>
      </li>
      <li className="flex flex-col items-center">
        <BiLogoTypescript size={30} />
        <p className="text-pretty text-center">TypeScript</p>
      </li>
      <li className="flex flex-col items-center">
        <TbBrandKotlin size={30} />
        <p className="text-pretty text-center">Kotlin</p>
      </li>
      <li className="flex flex-col items-center">
        <BiLogoJava size={30} />
        <p className="text-pretty text-center">Java</p>
      </li>
      <li className="flex flex-col items-center">
        <BiLogoSpringBoot size={30} />
        <p className="text-pretty text-center">Spring</p>
      </li>
      <li className="flex flex-col items-center">
        <BiLogoKubernetes size={30} />
        <p className="text-pretty text-center">Kubernetes</p>
      </li>
      <li className="flex flex-col items-center">
        <BiLogoAws size={30} />
        <p className="text-pretty text-center">AWS</p>
      </li>
      <li className="flex flex-col items-center">
        <BiLogoPostgresql size={30} />
        <p className="text-pretty text-center">PostgreSQL</p>
      </li>
      <li className="flex flex-col items-center">
        <TbBrandPrisma size={30} />
        <p className="text-pretty text-center">Prisma</p>
      </li>
      <li className="flex flex-col items-center">
        <BiLogoGraphql size={30} />
        <p className="text-pretty text-center">GraphQL</p>
      </li>
      <li className="flex flex-col items-center">
        <BiLogoFigma size={30} />
        <p className="text-pretty text-center">Figma</p>
      </li>
    </ul>
  )
}
