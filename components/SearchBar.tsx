import Form from "next/form";

export default function SearchBar() {
  return (
    <Form action="/search">
      <input
        type="search"
        name="q"
        required
        autoComplete="off"
        placeholder="Søk etter dyr"
      />
      <button type="submit">Søk</button>
    </Form>
  );
}
