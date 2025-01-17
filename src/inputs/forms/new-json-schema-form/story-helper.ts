import type { ArgTypes } from '@storybook/addons';

import { getDefaultFormData, getDefaultSchema } from '@/inputs/forms/new-json-schema-form/mock';
import { VALIDATION_MODES } from '@/inputs/forms/new-json-schema-form/type';
import { supportLanguages } from '@/translations';

export const getJsonSchemaFormArgTypes = (): ArgTypes => ({
    schema: {
        name: 'schema',
        type: { name: 'object', required: true },
        description: 'The json schema of form.',
        defaultValue: getDefaultSchema(),
        table: {
            type: {
                summary: 'object',
            },
            category: 'props',
            defaultValue: {
                summary: '{}',
            },
        },
        control: {
            type: 'object',
        },
    },
    formData: {
        name: 'formData',
        type: { name: 'object', required: true },
        description: 'Input data of form. This is `sync` prop with `update:form-data` event.',
        defaultValue: getDefaultFormData(),
        table: {
            type: {
                summary: 'object',
            },
            category: 'props',
            defaultValue: {
                summary: '{}',
            },
        },
        control: {
            type: 'object',
        },
    },
    language: {
        name: 'language',
        type: { name: 'string' },
        defaultValue: supportLanguages[0],
        table: {
            type: {
                summary: 'string',
            },
            category: 'props',
            defaultValue: {
                summary: supportLanguages[0],
            },
        },
        control: {
            type: 'select',
            options: supportLanguages,
        },
    },
    validationMode: {
        name: 'validationMode',
        type: { name: 'string' },
        description: `Validation mode. ${VALIDATION_MODES} are available. <br/>
        \`input\`:  Show validation results only for fields where input occurred.  <br/>
        \`all\`:  Show the validation results of all fields.  <br/>
        \`none\`:  Do not show validation results.  <br/>
        `,
        defaultValue: VALIDATION_MODES[0],
        table: {
            type: {
                summary: 'string',
            },
            category: 'props',
            defaultValue: {
                summary: 'input',
            },
        },
        control: {
            type: 'select',
            options: VALIDATION_MODES,
        },
    },
    // events
    onChange: {
        name: 'change',
        description: `Emitted when validation result and form data are changed. <br/>
        Event Parameters: <br/>
         - isValid: \`boolean\` <br/>
         - formData: \`object\``,
        defaultValue: null,
        table: {
            type: {
                summary: null,
            },
            category: 'events',
        },
    },
    onValidate: {
        name: 'validate',
        description: `Emitted after validation occurred. <br/>
        Event Parameters: <br/>
         - isValid: \`boolean\``,
        defaultValue: null,
        table: {
            type: {
                summary: null,
            },
            category: 'events',
        },
    },
    onUpdateFormData: {
        name: 'update:form-data',
        description: `Emitted when form data is updated. <br/>
        Event Parameters: <br/>
         - formData: \`object\``,
        defaultValue: null,
        table: {
            type: {
                summary: null,
            },
            category: 'events',
        },
    },
});
