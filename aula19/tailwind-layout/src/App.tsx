import './App.css'

function ThreeColumnHero() {

  return (
    <>
      <section className="h-screen grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
      <div className="col-span-1 md:col-span-2 flex flex-col justify-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white p-8 rounded-lg">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4">Explore o Mundo</h1>
        <p className="text-lg md:text-2xl leading-relaxed">
          Uma experiência visual imersiva com React, Tailwind e imagens de altíssima qualidade.
        </p>
      </div>
      <div className="hidden md:block relative overflow-hidden rounded-lg">
        <img
          src="https://picsum.photos/2680/1770"
          alt="Imagem aleatória"
          className="object-cover w-full h-full"
        />
      </div>
    </section>
    <section>
      <div className="p-6 bg-gray-100 flex justify-center">
        <p className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-lg leading-tight text-xl box-decoration-clone shadow-lg hover:box-decoration-slice transition-all duration-300">
          Este é um texto longo que vai quebrar em múltiplas linhas em telas menores, mostrando o efeito do <span className="font-bold underline">box-decoration-break</span> no Tailwind
        </p>
      </div>
    </section>
    <section>
      <article className="max-w-3xl mx-auto p-6">
        <img
          src="https://picsum.photos/1200"
          alt="Imagem aleatória"
          className="float-left md:float-start mr-4 mb-4 w-full md:w-1/3 rounded-lg shadow-md"
        />
        <p className="text-gray-700 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus vitae libero luctus venenatis. Sed consectetur libero non velit interdum, eu pulvinar purus porttitor. Suspendisse potenti.
        </p>
        <div className="clear-left md:clear-start mt-4 p-2 bg-gray-200 rounded-lg">
          Este bloco usa <code>clear-left</code> para limpar o float acima — em telas menores ou maiores, experimente trocar para <code>md:clear-none</code> ou <code>clear-both</code> para ver o comportamento.
        </div>
      </article>
    </section>
    </>
  )
}

export default ThreeColumnHero
