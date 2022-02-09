import ReactIcon from '../public/assets/react.png';
import NextIcon from '../public/assets/next.png';
import JavaIcon from '../public/assets/java.png';
import CssIcon from '../public/assets/css.png';
import HTMLIcon from '../public/assets/html.png';
import JSIcon from '../public/assets/js.png';
import MySqlIcon from '../public/assets/mysql.jpg';
import NodeIcon from '../public/assets/node.png';
import SassIcon from '../public/assets/sass.png';
import SqlServerIcon from '../public/assets/sqlServer.jpg';
import TsIcon from '../public/assets/ts.png';
import BootstrapIcon from '../public/assets/bootstrap.png';


export interface ISkill {
    logo: string;
    name: string;
}

export const DSkill: ISkill[] = [
    {
        name: 'Reactjs',
        logo: ReactIcon,
    },
    {
        name: 'Nextjs',
        logo: NextIcon,
    },
    {
        name: 'Java',
        logo: JavaIcon,
    },
    {
        name: 'Css',
        logo: CssIcon,
    },
    {
        name: 'HTML',
        logo: HTMLIcon,
    },
    {
        name: 'JavaScript',
        logo: JSIcon,
    },
    {
        name: 'MySQL',
        logo: MySqlIcon,
    },
    {
        name: 'Nodejs',
        logo: NodeIcon,
    },
    {
        name: 'Sass',
        logo: SassIcon,
    },
    {
        name: 'Sql Server',
        logo: SqlServerIcon,
    },
    {
        name: 'TypeScript',
        logo: TsIcon,
    },
    {
        name: 'Bootstrap',
        logo: BootstrapIcon,
    },
]