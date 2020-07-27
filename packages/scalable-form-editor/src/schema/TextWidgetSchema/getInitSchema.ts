import { WidgetKey } from 'scalable-form-tools';
import InitSchema from '../InitSchema';

export default function getInitSchema(getMessage: (key: string) => string): InitSchema {
  return {
    initJsonSchema: {
      type: 'string',
      title: getMessage('configSchemaInputLabel'),
      default: '',
      maxLength: 100000,
    },
    initFormData: '',
    initUISchema: {
      'ui:widget': WidgetKey.TextWidget,
      'ui:placeholder': getMessage('fieldSchemaCommonInputPlaceholder'),
    },
  };
}
