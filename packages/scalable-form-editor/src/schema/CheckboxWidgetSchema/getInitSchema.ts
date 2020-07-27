import { getRandomString, WidgetKey } from 'scalable-form-tools';
import InitSchema from '../InitSchema';

export default function getInitSchema(getMessage: (key: string) => string): InitSchema {
  return {
    initJsonSchema: {
      type: 'array',
      title: getMessage('fieldSchemaCheckboxLabel'),
      default: [],
      items: {
        type: 'string',
        enum: [getRandomString(), getRandomString(), getRandomString()],
        enumNames: [
          getMessage('fieldSchemaCommonOption1'),
          getMessage('fieldSchemaCommonOption2'),
          getMessage('fieldSchemaCommonOption3'),
        ],
      },
      uniqueItems: true,
    },
    initFormData: [],
    initUISchema: {
      'ui:widget': WidgetKey.CheckboxWidget,
      'ui:options': {
        vertical: false,
      },
    },
  };
}