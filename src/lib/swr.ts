import axios from 'axios';
import useSWR from 'swr';

import config from '../config';

type Methods = (
    'get' |
    'post' |
    'head' |
    'put' |
    'delete' |
    'options' |
    'patch'
);

export default function SWR(url: string, method: Methods = 'get') {
    if (url == 'linkcord') url = 'https://api.lanyard.rest/v1/users/622350390871982080'
    if (url == 'github') url = 'https://api.github.com/users/'+config.github.username+'/repos';

    return useSWR(url, href => (
        axios[method](href).then(res => res.data)
    ));
};