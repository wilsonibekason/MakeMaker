**MakeMaker**
git config --global user.email "you@example.com"
git config --global user.name "Your Name"

export default {
name: "contact",
title: "Contact",
type: "document",
url: "/contact",
description: "Contact information",
preview: true,
fields: [
{
name: "name",
title: "Name",
type: "text",
required: true,
display: {
placeholder: "Name",
validators: {
required: {
message: "Name is required",

                    },
                    email: {
                        message: "Email is required",
                        validator: function (value) {
                            return  /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\,+[a-z]|\d|[!#\$%&'\*\+\-\/=\])+(\.([a-+[a-z]|\d|[!#\$%&'\*\+\-\/=\])+)*)|((\x22)((((\x20|\x09)*(\x0d\x+((\x0a\x0c\x0d-\x1f\x7f]|\+[_\x01-\x7f]|[\x01-\x9+[_\x00-\x07\x0a-\x+[_\x02-\x1f\x7f]|\+[_\x04-\x1f\x7f]|[\x+[_\x00-\x07\x0a-\x1f+[_\x02-\x7f]|[\x01-\x+[_\x04-\x1f\x7f])+)?))*(((\x20|\x09+[_\x01-\x7f]|[\x01-\x+[_\x00-\x07\x0a-\x1+[_\x02-\x1f\x7f]|\+[_\x04-\x1f\x7f]|[\x+[_\x00-\x07\x0a-\x1+[_\x02-\x1f\x7f])+)?))*(((\x20|\x09)*(\x0d\x/
                        }
                    }
                }
            }
        },
        {
            "type": "Punctuator",
            "value": ")",
            "range": [
                8,
                9
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 8
                        },
                        "end": {
                            "line": 1,
                            "column": 9
                        },
                        "identifierName": "else"
                    }
        },
        {
            "type": "Punctuator",
            "value": "{",
            "range": [
                10,
                11
                ],
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 10
                        },
                        "end": {
                            "line": 1,
                            "column": 11
                            }
                            }
        }
    ]

}

{sectionContents.map((item, index) => (
<div className="relative flex flex-col mt-4">
<div className="px-4 py-5 flex-auto">
<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
<i className={`fas ${item?.icons}`}></i>
</div>
<h6 className="text-xl mb-1 font-semibold">
{item?.title}
</h6>
<p className="mb-4 text-blueGray-500">
{item?.description}
</p>
</div>
</div>
))}
