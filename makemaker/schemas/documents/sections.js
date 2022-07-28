
export default {
    name: "section",
    title: "Section",
    description: "The section of a section.",
    type: "document",
    fields: [
        {
            name: "description",
            title: "Description",
            type: "textarea",
            required: true,
            display: {
                render: (text, context) => {
                    return `<p>${text}</p>`;
                    }
                    },
                    elements: [
                        {
                            name: "title",
                            type: "text",
                            display: {
                                render: (text, context) => {
                                    return `<h3>${text}</h3>`;
                                    }
                                }
                                    }
                                    ]
        }
    ]
}