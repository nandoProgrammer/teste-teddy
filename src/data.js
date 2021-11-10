const data = [
    {
        solicitacao: '01',
        nome: 'Iuri Aguiar',
        data: '21/07/2021 10:15:25',
        razao: 'Aças Motta',
        cnpj: '000.000.000/000',
        documentos: [
            {
                nome: 'Capa do IPTU',
                status: 2
            },
            {
                nome: 'Dados Pessoais',
                status: 0
            },
            {
                nome: 'Balancete 2020',
                status: 1
            },
        ],
        compartilhamentos: [
            {
                remetente: 'Nubank',
                logoRemetente: 'https://media.glassdoor.com/sqll/827975/nubank-brasil-squareLogo-1621263640678.png',
                destinatario: 'Teddy Investimentos',
                logoDestinatario: 'https://teddydigital.io/wp-content/uploads/2019/12/teddy-open-banking.png',
                data: '27/07/2021',
                status: 2,
                acoes: 0,
            },
            {
                remetente: 'Caixa Econômica',
                logoRemetente: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfM6N_7D7n8dlYebPo6B9zdJrIm4F-_Kpvsw&usqp=CAU',
                destinatario: 'Teddy Investimentos',
                logoDestinatario: 'https://teddydigital.io/wp-content/uploads/2019/12/teddy-open-banking.png',
                data: '15/07/2021',
                status: 1,
                acoes: 1,
            },
            {
                remetente: 'Next',
                logoRemetente: 'https://img.ibxk.com.br/2018/3/programas/16048022153801240.png',
                destinatario: 'Teddy Investimentos',
                logoDestinatario: 'https://teddydigital.io/wp-content/uploads/2019/12/teddy-open-banking.png',
                data: '15/07/2021',
                status: 0,
                acoes: 1,
            }
        ]
    }
];

export default data;

