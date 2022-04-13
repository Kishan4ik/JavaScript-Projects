function _createModal(options) {
    const modal = document.createElement('div')
    modal.classList.add('vmodal')
    modal.insertAdjacentHTML('afterbegin', `
    <div class="modal-overlay">
        <div class="modal-window">
            <div class="modal-header">
                <span class="modal-title">Modal Title</span>
                <span class="modal-close">&times;</span>
            </div>
            <div class="modal-body">
                <p>Здесь был Артём</p>
                <p>Здесь был Артём</p>
            </div>
            <div class="modal-footer">
                <button>Ok</button>
                <button>Cancel</button>
            </div>
        </div>
    </div>
    `)
    document.body.appendChild(modal)
    return modal
}
/*
title: string - передаем в модальное окно title и он применяется для окна
closable: boolean - есть ли возможность закрыть окно (наличие крестика)
content: string - Контент окна
width: string ('400px') - Ширина окна
destroy(): void - метод, который убирает модельное окно и удаляет всех слушателей (полное удаление, чтобы не осталось дополнительных элементов)
Окно должно закрываться с анимацией по крестику
----------------------------------------------------------------
Теперь допы (со звездочкой)
setContent(string): void - публичный метод, меняющий содержимое окна
onClose(): void -  hook вызывается, когда окно закрыто
onOpen(): void - то же самое, но когда закрыто
beforeClose(): boolean - Если true, то окно можно закрыть, если нет, то нельзя
----------------------------------------------------------------
animate.css - библиотека, которая добавляет красивые анимации
С помощью нее надо добавить разные анимации появления окна
*/


$.modal = function(options) {
    const ANIMATION_SPEED = 200
    const $modal = _createModal(options)
    let closing = false
    return {
        open() {
            !closing && $modal.classList.add('open')
        },
        close() {
            closing = true
            $modal.classList.remove('open')
            $modal.classList.add('hide')
            setTimeout(() => {
                $modal.classList.remove('hide')
            }, ANIMATION_SPEED)
            closing = false
        },
        destroy() {}
    }
}