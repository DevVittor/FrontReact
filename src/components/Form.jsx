export default function Form(){
    return(
        <>
        <form action="/save" method="post">
            <input type="text" name="product" id="" placeholder="Digite o nome do produto"/>
            <input type="hidden" name="id" />
            <textarea name="description" id="" cols="30" rows="10"></textarea>
            <input type="text" name="state" id="" placeholder="Estado do produto"/>
            <input type="text" name="brand" id="" placeholder="Qual é a marca do produto"/>
            <input type="text" name="price" id="" placeholder="Qual o valor ?"/>
            <input type="submit" value="Cadastrar" />
        </form>
        </>
    )
}