const cejuscModel = () => {
    return { id: {
      id: "cejusc_id",
      label: "ID",
      type: "text",
      value: "",
      disabled: true,
    },
    data: {
      id: 'cejusc_data',
      label: 'Data',
      type: 'date',
      value: new Date().toISOString().substr(0, 10),
      disabled: true,
    },
    observacao: {
      id: "cejusc_observacao",
      label: "Observação",
      type: "textarea",
      value: "",
      disabled: false,
    },
    status: {
      id: "cejusc_status",
      label: "Status do cejusc",
      type: "text",
      value: false,
      disabled: false,
    }}
  }
  export default cejuscModel