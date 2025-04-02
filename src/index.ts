import { basekit, FieldType, FieldComponent, FieldCode } from '@lark-opdev/block-basekit-server-api';

basekit.addField({
  formItems: [
    {
      key: 'attachments',
      label: '缴款书文件',
      component: FieldComponent.FieldSelect,
      props: {
        supportType: [FieldType.Attachment],
      },
      validator: {
        required: true,
      }
    }
  ],

  resultType: {
    type: FieldType.Object,
    extra: {
      icon: {
        light: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/eqgeh7upeubqnulog/chatbot.svg'
      },
      properties: [
        {
          key: 'paymentCode',
          type: FieldType.Text,
          title: '缴款码',
          isGroupByKey: true,
          primary: true
        },
        {
          key: 'amountInWords',
          type: FieldType.Text,
          title: '大写金额'
        },
        {
          key: 'issueDate',
          type: FieldType.DateTime,
          title: '开票日期'
        }
      ]
    }
  },

  execute: async (formItemParams, context) => {
    const { attachments } = formItemParams;
    const attachment = attachments?.[0];
    
    if (!attachment) {
      return { code: FieldCode.Error };
    }
    
    // TODO: 实现OCR识别和字段提取逻辑
    
    return {
      code: FieldCode.Success,
      data: {
        paymentCode: '12010525000005036623', // 示例数据
        amountInWords: '壹仟贰佰元整', // 示例数据
        issueDate: Date.now() // 示例数据
      }
    };
  }
});

export default basekit;