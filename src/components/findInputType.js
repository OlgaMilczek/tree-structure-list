export default function findInputType(groupType) { 
    if (groupType === 'checkbox group') {
        return 'checkbox';
    } else if (groupType === 'radio group') {
        return 'radio';
    } else {
        throw new Error('Wrong group type!');
    }
}
