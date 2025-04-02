"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const block_basekit_server_api_1 = require("@lark-opdev/block-basekit-server-api");
block_basekit_server_api_1.basekit.addField({
    formItems: [
        {
            key: 'attachments',
            label: '缴款书文件',
            component: block_basekit_server_api_1.FieldComponent.FieldSelect,
            props: {
                supportType: [block_basekit_server_api_1.FieldType.Attachment],
            },
            validator: {
                required: true,
            }
        }
    ],
    resultType: {
        type: block_basekit_server_api_1.FieldType.Object,
        extra: {
            icon: {
                light: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/eqgeh7upeubqnulog/chatbot.svg'
            },
            properties: [
                {
                    key: 'paymentCode',
                    type: block_basekit_server_api_1.FieldType.Text,
                    title: '缴款码',
                    isGroupByKey: true,
                    primary: true
                },
                {
                    key: 'amountInWords',
                    type: block_basekit_server_api_1.FieldType.Text,
                    title: '大写金额'
                },
                {
                    key: 'issueDate',
                    type: block_basekit_server_api_1.FieldType.DateTime,
                    title: '开票日期'
                }
            ]
        }
    },
    execute: async (formItemParams, context) => {
        const { attachments } = formItemParams;
        const attachment = attachments?.[0];
        if (!attachment) {
            return { code: block_basekit_server_api_1.FieldCode.Error };
        }
        // TODO: 实现OCR识别和字段提取逻辑
        return {
            code: block_basekit_server_api_1.FieldCode.Success,
            data: {
                paymentCode: '12010525000005036623', // 示例数据
                amountInWords: '壹仟贰佰元整', // 示例数据
                issueDate: Date.now() // 示例数据
            }
        };
    }
});
exports.default = block_basekit_server_api_1.basekit;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRkFBcUc7QUFFckcsa0NBQU8sQ0FBQyxRQUFRLENBQUM7SUFDZixTQUFTLEVBQUU7UUFDVDtZQUNFLEdBQUcsRUFBRSxhQUFhO1lBQ2xCLEtBQUssRUFBRSxPQUFPO1lBQ2QsU0FBUyxFQUFFLHlDQUFjLENBQUMsV0FBVztZQUNyQyxLQUFLLEVBQUU7Z0JBQ0wsV0FBVyxFQUFFLENBQUMsb0NBQVMsQ0FBQyxVQUFVLENBQUM7YUFDcEM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsUUFBUSxFQUFFLElBQUk7YUFDZjtTQUNGO0tBQ0Y7SUFFRCxVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsb0NBQVMsQ0FBQyxNQUFNO1FBQ3RCLEtBQUssRUFBRTtZQUNMLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsNkVBQTZFO2FBQ3JGO1lBQ0QsVUFBVSxFQUFFO2dCQUNWO29CQUNFLEdBQUcsRUFBRSxhQUFhO29CQUNsQixJQUFJLEVBQUUsb0NBQVMsQ0FBQyxJQUFJO29CQUNwQixLQUFLLEVBQUUsS0FBSztvQkFDWixZQUFZLEVBQUUsSUFBSTtvQkFDbEIsT0FBTyxFQUFFLElBQUk7aUJBQ2Q7Z0JBQ0Q7b0JBQ0UsR0FBRyxFQUFFLGVBQWU7b0JBQ3BCLElBQUksRUFBRSxvQ0FBUyxDQUFDLElBQUk7b0JBQ3BCLEtBQUssRUFBRSxNQUFNO2lCQUNkO2dCQUNEO29CQUNFLEdBQUcsRUFBRSxXQUFXO29CQUNoQixJQUFJLEVBQUUsb0NBQVMsQ0FBQyxRQUFRO29CQUN4QixLQUFLLEVBQUUsTUFBTTtpQkFDZDthQUNGO1NBQ0Y7S0FDRjtJQUVELE9BQU8sRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ3pDLE1BQU0sRUFBRSxXQUFXLEVBQUUsR0FBRyxjQUFjLENBQUM7UUFDdkMsTUFBTSxVQUFVLEdBQUcsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2hCLE9BQU8sRUFBRSxJQUFJLEVBQUUsb0NBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQyxDQUFDO1FBRUQsdUJBQXVCO1FBRXZCLE9BQU87WUFDTCxJQUFJLEVBQUUsb0NBQVMsQ0FBQyxPQUFPO1lBQ3ZCLElBQUksRUFBRTtnQkFDSixXQUFXLEVBQUUsc0JBQXNCLEVBQUUsT0FBTztnQkFDNUMsYUFBYSxFQUFFLFFBQVEsRUFBRSxPQUFPO2dCQUNoQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU87YUFDOUI7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUMsQ0FBQztBQUVILGtCQUFlLGtDQUFPLENBQUMifQ==