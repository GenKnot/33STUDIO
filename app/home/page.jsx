"use client";
import Footer from "@/components/footer/footer";
import Header3 from "@/components/header/header-3";
import { useLanguage } from "@/lib/i18n/context";

export default function Home() {
    const { t } = useLanguage();
    
    const renderText = (text) => {
        return text.split('\n').map((line, i) => (
            <span key={i}>
                {line}
                {i < text.split('\n').length - 1 && <br />}
            </span>
        ));
    };
    
    return (
        <>
            <Header3 />
            <section className="home-hero">
                <div className="home-hero__background">
                    <img 
                        src="/images/projects/whispering-light/Y风格1.jpg" 
                        alt="33 Studio Living"
                    />
                    <div className="home-hero__overlay"></div>
                </div>
                <div className="container">
                    <div className="home-hero-content">
                        <h1>33 Studio Living</h1>
                        <p className="subtitle">Where Light Becomes Home</p>
                        <p className="tagline">当光成为家</p>
                        <div className="intro">
                            <p>光的诗性 · 情绪的栖息</p>
                            <p>{renderText('住宅不是商业的反面，\n而是体验逻辑的更柔软版本。\n我们以柔光、触感与比例打造居者的节奏，\n在安静中呈现精确，在松弛中描绘生活的本真。')}</p>
                        </div>
                    </div>
                </div>
                <div className="home-hero__scroll-indicator"></div>
            </section>
            <section className="projects-grid padding-top-140 padding-bottom-140">
                <div className="container">
                    <div className="row gutter-y-40">
                        <div className="col-lg-6">
                            <a href="/home/quiet-elevation" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/quiet-elevation/X风格1.jpg" 
                                        alt="Quiet Elevation"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Quiet Elevation
                                    </h3>
                                    <p className="project-card__subtitle">
                                        在城市的高度中，找到光与比例的平衡与宁静
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/home/flowing-light" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/flowing-light/myst-Z风格1.jpg" 
                                        alt="Flowing Light"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Flowing Light
                                    </h3>
                                    <p className="project-card__subtitle">
                                        在白与光之间，以最轻的手法，描绘生活的呼吸
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/home/whispering-light" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/whispering-light/Y风格1.jpg" 
                                        alt="Whispering Light"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Whispering Light
                                    </h3>
                                    <p className="project-card__subtitle">
                                        线条柔中带力，材质静中藏光，生活于此成为秩序的艺术
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/home/whisper-of-scent" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/whisper-of-scent/A风格3.jpg" 
                                        alt="Whisper of Scent"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Whisper of Scent
                                    </h3>
                                    <p className="project-card__subtitle">
                                        香气、光影与节奏共存，家的美学在日常中被轻声唤醒
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/home/traces-of-warmth" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/traces-of-warmth/aldred project软装2.jpg" 
                                        alt="Traces of Warmth"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Traces of Warmth
                                    </h3>
                                    <p className="project-card__subtitle">
                                        温度，是空间最克制也最动人的情绪
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/home/lunar-stillness" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/lunar-stillness/Moonbeam色调设计2.jpg" 
                                        alt="Lunar Stillness"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Lunar Stillness
                                    </h3>
                                    <p className="project-card__subtitle">
                                        在柔光与石质的呼吸间，理性与诗意共存
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/home/sculpted-silence" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/sculpted-silence/E风格3.jpg" 
                                        alt="Sculpted Silence"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Sculpted Silence
                                    </h3>
                                    <p className="project-card__subtitle">
                                        黑白之间的呼吸，是静谧的雕塑
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/home/obsidian-calm" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/obsidian-calm/encore-residence3.jpg" 
                                        alt="Obsidian Calm"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Obsidian Calm
                                    </h3>
                                    <p className="project-card__subtitle">
                                        黑曜的深沉与火光的温度
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/home/pure-retreat" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/pure-retreat/浴室风格A1.jpg" 
                                        alt="Pure Retreat"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        Pure Retreat
                                    </h3>
                                    <p className="project-card__subtitle">
                                        水与光的对话，纯净成为一种仪式
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="col-lg-6">
                            <a href="/home/the-study-series" className="project-card">
                                <div className="project-card__image">
                                    <img 
                                        src="/images/projects/the-study-series/B风格.jpg" 
                                        alt="The Study Series"
                                    />
                                </div>
                                <div className="project-card__content">
                                    <h3 className="project-card__title">
                                        The Study Series
                                    </h3>
                                    <p className="project-card__subtitle">
                                        材质、光影与比例的实验性探索
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
