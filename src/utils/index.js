import { Range, Map } from 'immutable';

export const createRandomSequence = (from, to) => (
    Range(from, to).map((i) => Map({
        rand: Math.random(),
        value: i,
    })).sort((l, r) => l.get('rand') - r.get('rand'))
        .map((obj) => obj.get('value')).toArray());

export const convertToPostData = (username, email, score) => (`username=${username}&email=${email}&score=${score}`);
export const convertGetData = (data) => (data.map(({ email, username, score }) => ({
    email,
    score,
    name: username,
})));
