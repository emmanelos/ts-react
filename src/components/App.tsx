import bgCursosCodelytvPro from '../img/bg/cursos-codelytv-pro.png';
import testimonioJoanMiralles from '../img/testimonios/joan-miralles.jpg';

export const App = () => {
	return (
		<div className="app">
			<section className="o-container">
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<p>
					Text with a <a href="">a link</a>.
				</p>
			</section>
			<section className="o-container">
				<h3>A UI List:</h3>
				<ul className="o-ui-list">
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
				<h3>A horizontal List:</h3>
				<ul className="o-ui-list o-ui-list--horizontal">
					<li>Item 1</li>
					<li>Item 2</li>
					<li>Item 3</li>
				</ul>
			</section>
			<section className="a-cover-background a-cover-background--plant">
				<div className="o-container">
					<h3 className="a-title">Atoms</h3>
					<p className="a-lead">
						Lorem consectetur dolor culpa nulla fugiat culpa sit velit anim voluptate
						incididunt. Cupidatat excepteur eiusmod quis velit id sint labore. Aliquip
						officia occaecat id pariatur anim nulla qui et minim ullamco amet
						voluptate dolor non. Tempor fugiat Lorem sint incididunt exercitation ea
						ad aliqua id et enim. Magna tempor id laboris ullamco eiusmod.
					</p>
					<div className="a-box">
						Aliqua commodo consequat velit aute excepteur duis exercitation officia
						sint. Veniam id ea ea ad aute cillum deserunt excepteur.
					</div>
					<br />
					<button className="a-btn a-btn--primary">Primary button</button>
					<br />
					<br />
					<button className="a-btn a-btn--primary a-btn--block">
						Primary block button
					</button>
					<br />
					<span className="a-pill">💊 Pill</span>
				</div>
			</section>
			<section className="o-container">
				<h3 className="a-title">Molecules</h3>
				<article className="m-card">
					<img
						className="m-card__img"
						alt="Vue 3: Novedades aplicadas al mundo real"
						src="img/cursos/novedades-vue-3.jpg"
					/>

					<h4 className="m-card__title">
						<a href="#" target="_blank">
							✌️ Vue 3: Novedades aplicadas al mundo real
						</a>
					</h4>
					<strong className="m-card__meta">Javi y Núria</strong>
					<p>
						Veremos cómo exprimir las novedades de Vue 3 con ejemplos reales y
						aplicando buenas prácticas.
					</p>
					<button className="a-btn a-btn--block a-btn--primary">
						Empezar curso
					</button>
				</article>
				<br />
				<div className="a-box m-cta-box">
					<h3 className="m-cta-box__title">
						Suscripción mensual <strong>29€</strong>
					</h3>
					<span className="m-cta-box__note">Sin permanencia mínima</span>
					<ul className="o-ui-list m-cta-box__content">
						<li>💻 Acceso a todos los cursos ya publicados</li>
						<li>
							👌 Contenido de calidad impartido por profesionales con amplia
							experiencia
						</li>
						<li>🚀 Nuevo contenido cada semana</li>
						<li>🙌 Acceso a la comunidad CodelyTV Pro</li>
						<li>🔖 Certificados al completar cursos</li>
					</ul>
					<a
						className="a-btn a-btn--primary m-cta-box__cta"
						href="https://pro.codely.tv/subscribe?utm_source=courses-landing&utm_medium=landing&utm_campaign=internal&utm_content=subscription"
					>
						<span className="a-btn__text">👉 SUSCRÍBETE AHORA 👈</span>
					</a>
				</div>
				<br />
				<div className="m-dropdown">
					<span className="m-dropdown__label">Categoría:</span>
					<div className="m-dropdown__field">
						<ul className="o-ui-list m-dropdown__list">
							<li className="m-dropdown__item m-dropdown__item--active">Todas</li>
						</ul>
					</div>
				</div>
				<br />
				<div className="m-quote">
					<div className="a-box">
						Llevo casi 14 años en esto y me flipa la cantidad de conocimientos que me
						siguen faltando. Vuestros cursos me ayudan a asumirlos.
					</div>
					<div className="m-quote__attribution">
						<img
							alt="Joan Miralles"
							src={testimonioJoanMiralles}
							className="m-quote__image"
						/>
						<div>
							<h5 className="m-quote__author">Joan Miralles</h5>
							<span>Arquitecto Software - Brújula</span>
						</div>
					</div>
				</div>
				<br />
				<div className="m-video-thumbnail">
					<img
						alt="Vídeo introducción cursos CodelyTV Pro"
						src={bgCursosCodelytvPro}
						className="m-video-thumbnail__img"
					/>
					<button
						aria-label="Reproducir Vídeo introducción cursos CodelyTV Pro"
						className="m-video-thumbnail__play m-video-thumbnail__play--large"
					></button>
				</div>
			</section>
		</div>
	);
};
