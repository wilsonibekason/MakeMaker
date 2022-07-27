 import {MdPeople} from 'react-icons/md';

export default {
    name: "social",
    type: "document",
    title: "social",
    icon: MdPeople,
    fields: [
        {
            name: "channel",
            type: "string",
            options: {
               list:  ["twitter", "linkedIn", "facebook", "instagram"]
            }
        },
        {
            name: "text",
            type: "text",
        },
        {
            name: "attachment",
            type: "image",
            title: "Attachment",
            options: {hotspot: true},
        },
    ],
};