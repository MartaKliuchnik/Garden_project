import React from 'react';
import s from './style.module.sass';
import picture from './media/image.png';
import AddToBasketInDescription from '../../components/UI/AddToBasketInDescription';
import { useDispatch } from 'react-redux';
import { add_to_basket_action } from '../../store/reducer/basketReducer';

export default function Description({product}) {
    
    const { id, title, price, discont_price, description } = product;
    
    const dispatch = useDispatch();

    const add_to_basket = () => dispatch(add_to_basket_action({ id, title, price, discont_price }));

    // const block_price = discont_price === 0.75
    //     ?
    //         <>
    //             <p className = {s.clear_price} > { price }€</p>
    //         </>
    //     :
    //         <div class={s.price_block}>
    //             <p className={s.discount_price}>{discont_price}€</p>
    //             <p className={s.price}>{price}€</p>
    //             <p className={s.discount}>-{Math.round((price - discont_price)*100/price)}%</p>
    //          </div>

    return (
        <div className={['wrapper', s.wrapper].join(' ')}>
            {/* <p className={s.subheader}>{title}</p>
            <div className={s.description}>
                <div className={s.product_img}>
                    <img src={picture} alt={title} />
                </div>
                <div className={s.product_info}>
                    <p>{block_price}</p>
                    <p>{description}</p>
                </div>
            </div> */}
            <p className={s.subheader}>Индикатор инкубаторный ИИ АКГ 2,822,057</p>
            <div className={s.description}>
                <div className={s.product_img}>
                    <img src={picture} alt={title} />
                </div>
                <div className={s.product_info}>
                    <div className={s.price_block}>
                        <p className={s.discount_price}>12p</p>
                        <p className={s.price}>55p</p>
                        <p className={s.discount}>-5%</p>
                    </div>
                    <AddToBasketInDescription onClick={add_to_basket} />
                    <div className={s.description_block}>
                        <p>Description</p>
                        <div className={s.description_container}>
                            <p>{description}Тонкопористые кремнистые породы отложений диатомитовых водорослей, сцементированные опаловым кремнием.\nПриродный почвоулучшитель, инсектицид\nСодержание основных веществ, %:\nSiO2 (органический кремний) - 74,8 – 88,0, из них 40-45 в аморфной форме\nAl2O3 - 3,3- 9,7 CaO - 0,6 K2O - 0,96\nFe2O3 - 2,3-4,8 MgO - 0,6-1,7 Na2O - 0,74\nСвойства:\nзащищает от насекомых, грибов и плесени – уникальное свойство диатомита поглощать влагу из покрова вредителей приводит к их гибели;\nудерживает избыток влаги, полезные микроэлементы, удобрения и равномерно отдает их растениям – один атом кремния диатомита удерживает до 119 молекул воды;\nснижает количество нитратов, тяжелых металлов в почве – адсорбирущая способность в 100 раз выше, чем у активированного угля\nукрепляет корни, стебли и листья растения - благодаря высокому содержанию аморфного оксида кремния\nзащищает от стрессов и увеличивает урожайность – огурцов на 20%, картофеля на 40%, томатов на 13%, моркови на 14%, свеклы на 13%, капусты на 20%\nнормализует питательный, тепловой, воздушный режим, кислотность почвы\nспособствует развитию почвенной микрофлоры\ncпособствует переходу недоступных растениям почвенных фосфатов в доступные формы, а также препятствует трансформации фосфорных удобрений в недоступные.\nИнструкция по применению\nДля улучшения качества почвы\nПеред посадкой или после уборки урожая – равномерно рассыпать по поверхности грядки из расчета 150-250гр на 1м2 и перекопать на глубину штыка лопаты.\nВо время вегетации – равномерно рассыпать по поверхности грядки из расчета 150-200гр на 1м2 и разрыхлить на глубину 5-10см.\nДля борьбы с насекомыми:\nПосыпать у основания растения или в местах скопления и передвижения насекомых при сухой погоде\nСрок хранения: не ограничен.\nУсловия хранения: в сухом месте при температуре от -35 до +35 С.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
