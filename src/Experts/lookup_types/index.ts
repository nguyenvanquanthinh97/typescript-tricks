export default {}
type SubmitRequest = {
    payment: {
        creditCardToken: string
    },
    personal: {
        email: string,
        phone: string,
        previousAliases: {
            firstname: string,
            middlename: string,
            lastname: string
        }[]
    }
}

type PaymentRequest = SubmitRequest['payment'];
type PreviousAlias = SubmitRequest['personal']['previousAliases'][0];

function getPayment(): PaymentRequest {
    return {
        creditCardToken: '123123123456456@@'
    }
}
