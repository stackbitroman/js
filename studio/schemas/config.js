export default {
    "type": "document",
    "name": "config",
    "title": "Global site config",
    "fields": [
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "Site title",
            "validation": Rule => Rule.required()
        },
        {
            "type": "string",
            "name": "baseurl",
            "title": "Base URL",
            "description": "Serve the website from the given base URL",
            "hidden": true,
            "validation": null
        },
        {
            "type": "string",
            "name": "permalink",
            "title": "Permalink",
            "description": "The output path for your pages, posts, or collections.",
            "hidden": false,
            "initialValue": "/posts/:slug:output_ext",
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "/posts/:slug:output_ext"
                ]
            }
        },
        {
            "type": "string",
            "name": "snipcart_api_key",
            "title": "Snipcart public API key",
            "validation": null
        },
        {
            "type": "string",
            "name": "footer_text",
            "title": "Footer Text",
            "validation": null
        },
        {
            "type": "image",
            "name": "logo_light",
            "title": "Logo Light",
            "validation": null
        },
        {
            "type": "image",
            "name": "logo_dark",
            "title": "Logo Dark",
            "validation": null
        },
        {
            "type": "image",
            "name": "favicon",
            "title": "favicon",
            "validation": null
        },
        {
            "type": "image",
            "name": "hamburger_background_image",
            "title": "Hamburger menu background image",
            "validation": null
        },
        {
            "type": "image",
            "name": "bg_image_primary",
            "title": "Primary Backround Image",
            "description": "Primary Backround Image (JPG or PNG)",
            "validation": null
        },
        {
            "type": "image",
            "name": "bg_image_secondary",
            "title": "Secondary Backround Image",
            "description": "Secondary Backround Image (JPG or PNG)",
            "validation": null
        },
        {
            "type": "image",
            "name": "bg_image_product",
            "title": "Product Backround Image",
            "description": "Product Backround Image (JPG or PNG)",
            "validation": null
        },
        {
            "type": "string",
            "name": "palette",
            "title": "Color Palette",
            "validation": null,
            "options": {
                "list": [
                    "green"
                ]
            }
        },
        {
            "type": "object",
            "name": "palettes",
            "title": "Palettes",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "palette",
                    "name": "green",
                    "title": "Green",
                    "validation": null
                }
            ]
        },
        {
            "type": "array",
            "name": "main_menu",
            "title": "Navigation Links",
            "description": "List of navigation links.",
            "validation": null,
            "of": [
                {
                    "type": "action"
                }
            ]
        },
        {
            "type": "object",
            "name": "sass",
            "title": "Sass",
            "hidden": true,
            "validation": null,
            "fields": [
                {
                    "type": "number",
                    "name": "indentWidth",
                    "title": "Indent Width",
                    "description": "Used to determine the number of spaces or tabs to be used for indentation.",
                    "initialValue": 4,
                    "validation": Rule => Rule.integer()
                },
                {
                    "type": "string",
                    "name": "style",
                    "title": "Output Style",
                    "description": "Determines the output format of the final CSS style.",
                    "initialValue": "nested",
                    "validation": null,
                    "options": {
                        "list": [
                            "nested",
                            "expanded",
                            "compact",
                            "compressed"
                        ]
                    }
                },
                {
                    "type": "number",
                    "name": "precision",
                    "title": "Precision",
                    "description": "Used to determine how many digits after the decimal will be allowed.",
                    "initialValue": 10,
                    "validation": Rule => Rule.integer()
                }
            ]
        },
        {
            "type": "array",
            "name": "plugins",
            "title": "Plugins",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "array",
            "name": "exclude",
            "title": "Exclude",
            "description": "Exclude directories and/or files from the conversion.",
            "hidden": true,
            "validation": null,
            "of": [
                {
                    "type": "string"
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Config File Path",
            "description": "The file path of the configuration file",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "_config.yml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "config"
                ]
            }
        }
    ],
    "singleInstance": true,
    "preview": {
        "select": {
            "title": "title"
        }
    }
}