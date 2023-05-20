import './Lista.css'
const produtos = [
  {
    nome: "Macbook Air 13 Chip M1 256gb",
    image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
    preco: "R$ 7999.00",
  },
  {
    nome: "Echo Dot (4ª Geração)",
    image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
    preco: "R$ 379.00",
  },
  {
    nome: "Câmera Ip Sem Fio 360°",
    image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
    preco: "R$ 199.00",
  },
  {
    nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
    image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
    preco: "R$ 1599.00",
  },
];

function Lista() {
  return (
    <div>
    <h1>Produtos</h1>

    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Imagem</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {produtos.map((produto, index) => (
          <tr key={index}>
            <td>{produto.nome}</td>
            <td>
              <img src={produto.image} alt={produto.nome} />
            </td>
            <td>{produto.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}

export default Lista;
