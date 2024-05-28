const products = [
  {
    id: "1",
    name: "Instalacje elektryczne",
    description:
      "Instalacje elektryczne w budynkach mieszkalnych, biurowych, przemysłowych, użyteczności publicznej",
  },
  {
    id: "2",
    name: "Uziomy",
    description:
      "Uziomy w budynkach mieszkalnych, biurowych, przemysłowych, użyteczności publicznej",
  },
  {
    id: "3",
    name: "Instalacje odgromowe",
    description:
      "Instalacje odgromowe w budynkach mieszkalnych, biurowych, przemysłowych, użyteczności publicznej",
  },
  {
    id: "4",
    name: "Systemy alarmowe",
    description:
      "Systemy alarmowe w budynkach mieszkalnych, biurowych, przemysłowych, użyteczności publicznej",
  },
  {
    id: "5",
    name: "Systemy CCTV (monitoring)",
    description:
      "Systemy CCTV (monitoring) w budynkach mieszkalnych, biurowych, przemysłowych, użyteczności publicznej",
  },
  {
    id: "6",
    name: "Pomiary elektryczne",
    description:
      "Pomiary elektryczne w budynkach mieszkalnych, biurowych, przemysłowych, użyteczności publicznej",
  },
  {
    id: "7",
    name: "Przeglady okresowe instalacji elektrycznych",
    description:
      "Przeglady okresowe instalacji elektrycznych w budynkach mieszkalnych, biurowych, przemysłowych, użyteczności publicznej",
  },
  {
    id: "8",
    name: "Usuwanie usterk",
    description:
      "Usuwanie usterk w instalacjach elektrycznych w budynkach mieszkalnych, biurowych, przemysłowych, użyteczności publicznej",
  },
];

export const getProducts = () => {
  return products;
};

export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};
