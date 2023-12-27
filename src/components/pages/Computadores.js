function Computadores() {
  return (
    <div>
      <Select
        name="memoria"
        text="Memória" // options={categories}
      />
      <Select
        name="hd"
        text="Hard Disk" // options={categories}
      />
      <Select
        name="processador"
        text="Processador" // options={categories}
      />
      <Select
        name="office"
        text="Office" // options={categories}
      />
    </div>
  );
}

export default Computadores;
