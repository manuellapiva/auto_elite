import vinhedo from '../assets/Vinhedo.jpg';

export default function Contato() {
	return (
		<section className="bg-gray-900 text-white">
			<div className="max-w-6xl mx-auto px-6 py-20">
				<div className="flex items-start">
					<div className="w-1 bg-red-600 mr-6 h-40 md:h-56" aria-hidden="true" />
					<div>
						<p className="text-red-500 uppercase tracking-widest text-sm mb-4">Fale conosco</p>
						<h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">ENTRE EM CONTATO</h1>
						<p className="text-gray-300 max-w-2xl">Nossa equipe de especialistas está pronta e preparada para te ajudar naquilo que você precisar.</p>
					</div>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-6 pb-20">
				<div className="grid md:grid-cols-2 gap-10">
					<div>
						<h2 className="text-2xl font-extrabold tracking-tight mb-4">FALAR COM UM ESPECIALISTA</h2>
						<p className="text-gray-300 mb-8">Se você está procurando por um veículo específico, opções de financiamento ou simplesmente quer saber mais sobre a loja, estamos aqui para ajudar!</p>
						<div className="space-y-6">
							<div className="border border-gray-800 p-6 bg-gray-800">
								<div className="flex items-center">
									<div className="p-3 rounded-full bg-transparent text-red-500 mr-4">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 13l3-3m0 0l3-3m-3 3l3 3M21 21l-6-6" />
										</svg>
									</div>
									<div>
										<p className="text-xs uppercase text-gray-400 mb-1">Telefone</p>
										<p className="text-white font-medium">+55 (19) 99789-5675</p>
									</div>
								</div>
							</div>
							<div className="border border-gray-800 p-6 bg-gray-800">
								<div className="flex items-center">
									<div className="p-3 rounded-full bg-transparent text-red-500 mr-4">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 10-8 0 4 4 0 008 0z" />
										</svg>
									</div>
									<div>
										<p className="text-xs uppercase text-gray-400 mb-1">Email</p>
										<p className="text-white font-medium">info@autoelite.com</p>
									</div>
								</div>
							</div>
							<div className="border border-gray-800 p-6 bg-gray-800">
								<div className="flex items-center">
									<div className="p-3 rounded-full bg-transparent text-red-500 mr-4">
										<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
											<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13 21.314l-4.657-4.657A8 8 0 1117.657 16.657z" />
										</svg>
									</div>
									<div>
										<p className="text-xs uppercase text-gray-400 mb-1">Endereço</p>
										<p className="text-white font-medium">Avenida das Palmeiras, 1250 <br></br> Jardim Primavera – <br></br>Vinhedo – SP,<br></br> 13280-000</p>
									</div>
                                    <div> 
                                    <p className="text-xs uppercase text-gray-400 mb-1 px-16">Horário</p>
										<p className="text-white font-medium px-16">Seg - Sáb: <br></br>9AM - 7PM<br/>Dom: <br></br>11AM - 5PM</p>
                                        </div>  
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="bg-gray-800 p-8 border border-gray-700">
							<h3 className="text-2xl font-extrabold mb-6">MANDE UMA MENSAGEM</h3>
							<form onSubmit={(e)=>e.preventDefault()} className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="text-xs uppercase text-gray-400 mb-2 block">Nome completo*</label>
										<input className="w-full bg-gray-900 border border-gray-700 p-3 text-white" placeholder="Marcus Silva" />
									</div>
									<div>
										<label className="text-xs uppercase text-gray-400 mb-2 block">Email *</label>
										<input className="w-full bg-gray-900 border border-gray-700 p-3 text-white" placeholder="marcus.silva@gmail.com" />
									</div>
								</div>

								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div>
										<label className="text-xs uppercase text-gray-400 mb-2 block">Número de telefone</label>
										<input className="w-full bg-gray-900 border border-gray-700 p-3 text-white" placeholder="+55 (19) 99999-9999" />
									</div>
									<div>
										<label className="text-xs uppercase text-gray-400 mb-2 block">Assunto</label>
										<select className="w-full bg-gray-900 border border-gray-700 p-3 text-white">
											<option>Selecione o assunto</option>
											<option>Sales</option>
											<option>Financing</option>
											<option>Service</option>
										</select>
									</div>
								</div>

								<div>
									<label className="text-xs uppercase text-gray-400 mb-2 block">Mensagem *</label>
									<textarea className="w-full bg-gray-900 border border-gray-700 p-4 text-white h-40" placeholder="Diga-nos como podemos ajudá-lo..."></textarea>
								</div>

								<div>
									<button className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-4">
									<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="none" stroke="currentColor">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2z" />
									</svg>
									ENVIAR MENSAGEM
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<div className="max-w-6xl mx-auto px-6 pb-20">
			<div className="relative overflow-hidden rounded-3xl bg-cover bg-center min-h-[26rem]" style={{ backgroundImage: vinhedo ? `url(${vinhedo})` : 'none' }}>
				<div className="absolute inset-0 bg-black/40" />
				<div className="relative py-24 px-6 md:px-16 text-center">
					<div className="inline-flex flex-col items-center justify-center rounded-3xl bg-red-600 px-10 py-14 shadow-2xl">
						<div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 mb-4">
							<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0v8m0 0l-3-3m3 3l3-3" />
							</svg>
						</div>
						<p className="text-sm uppercase tracking-[0.4em] text-white/80 mb-2">AUTO ELITE vinhedo</p>
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Avenida das Palmeiras, 1250, Jardim das Palmeiras</h2>
						<p className="text-sm text-white/90">Vinhedo, SP 13280-000</p>
					</div>
					<p className="mt-10 text-sm uppercase tracking-[0.35em] text-white/60">— MAP PLACEHOLDER — INTEGRATE GOOGLE MAPS OR MAPBOX FOR PRODUCTION —</p>
				</div>
			</div>
		</div>
	</section>
	)
}

