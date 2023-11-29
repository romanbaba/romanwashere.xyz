import { BsDiscord, BsInstagram, BsSteam, BsGithub, Bs123 } from 'react-icons/bs';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai'
import { SiTypescript, SiVite } from 'react-icons/si';
import { DiNodejsSmall, DiReact, DiVisualstudio } from 'react-icons/di';
import { TbBrandNextjs } from 'react-icons/tb';

export default {
    'github': {
        'username': 'ewgsta'
    },
    'discord': {
        'id': '341585045397438464'
    },
    'social_media_accounts': [
        {
            'label': 'Github',
            'to': 'https://github.com/ewgsta',
            'icon': BsGithub,
        },
        {
            'label': 'Discord',
            'to': 'https://discord.com/341585045397438464',
            'icon': BsDiscord,
        },
        {
            'label': 'Instagram',
            'to': 'https://instagram.com/ewgsta',
            'icon': BsInstagram,
        },
        {
            'label': 'Steam',
            'to': 'https://steamcommunity.com/id/tolga_saritas/',
            'icon': BsSteam,
        }
    ],
    'techs': [
        {
            'lang': 'HTML5',
            'icon': AiFillHtml5
        },
        {
            'lang': 'CSS3',
            'icon': IoLogoCss3
        },
        {
            'lang': 'JavaScript',
            'icon': IoLogoJavascript
        },
        {
            'lang': 'TypeScript',
            'icon': SiTypescript
        },
        {
            'lang': 'Node.JS',
            'icon': DiNodejsSmall
        },
        {
            'lang': 'React',
            'icon': DiReact
        },
        {
            'lang': 'Vite',
            'icon': SiVite
        },
        {
            'lang': 'Next.js',
            'icon': TbBrandNextjs
        },
    ]
}
