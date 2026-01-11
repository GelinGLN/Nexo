/**
 * Modal - Sistema central de modais do Nexo
 * -----------------------------------------
 * Tipos suportados:
 * - info
 * - success
 * - select
 */

class Modal {
    constructor({
        width = 'auto',
        height = 'auto',
        type = 'info',
        title = '',
        msg,
        onConfirm = null,
        onCancel = null
    }) {
        // -------------------------
        // Validações básicas
        // -------------------------
        if (!msg) {
            throw new Error('ModalError: msg is required');
        }

        if (!['info', 'success', 'select'].includes(type)) {
            throw new Error(`ModalError: invalid modal type "${type}"`);
        }

        this.type = type;
        this.title = String(title);
        this.msg = String(msg);

        // -------------------------
        // Dimensões
        // -------------------------
        this.width = this.#parseSize(width, 'width');
        this.height = this.#parseSize(height, 'height');

        // -------------------------
        // Callbacks
        // -------------------------
        this.onConfirm = this.#parseAction(onConfirm);

        if (type === 'select') {
            if (!onCancel) {
                throw new Error('ModalError: select modal requires onCancel');
            }
            this.onCancel = this.#parseAction(onCancel);
        }
    }

    // =========================
    // Métodos privados
    // =========================

    #parseSize(value, propName) {
        if (value === 'auto') return 'fit-content';

        const parsed = parseInt(value);
        if (Number.isNaN(parsed)) {
            console.warn(`ModalWarning: invalid ${propName}, defaulting to auto`);
            return 'auto';
        }
        return `${parsed}px`;
    }

    #parseAction(action) {
        if (!action) return null;

        if (action === 'close') {
            return { type: 'close' };
        }

        if (action.startsWith('url:')) {
            return {
                type: 'url',
                value: action.replace('url:', '')
            };
        }

        throw new Error(`ModalError: invalid action "${action}"`);
    }

    // =========================
    // Renderização
    // =========================

    render() {
        const container = document.createElement('div');
        container.className = 'modalContainer';
        container.id = `modal_${this.type}_${Date.now()}`;

        container.style.width = this.width;
        container.style.height = this.height;

        container.innerHTML = this.#buildTemplate(container.id);

        document.body.appendChild(container);
    }


    #buildTemplate(containerId) {
        return `
            <h3 class="modal_title">${this.title}</h3>
            <p class="modal_message">${this.msg}</p>
            <div class="modal_buttons">
                ${this.#buildConfirmButton(containerId)}
                ${this.type === 'select' ? this.#buildCancelButton(containerId) : ''}
            </div>
        `;
    }

    #buildConfirmButton(containerId) {
        return this.#buildButton(
            this.onConfirm,
            'Confirmar',
            'modal_btnConfirm',
            containerId
        );
    }

    #buildCancelButton(containerId) {
        return this.#buildButton(
            this.onCancel,
            'Cancelar',
            'modal_btnCancel',
            containerId
        );
    }

    #buildButton(action, label, className, containerId) {
        if (!action) return '';

        if (action.type === 'close') {
            return `
                <button class="${className}"
                    onclick="document.getElementById('${containerId}').remove()">
                    ${label}
                </button>
            `;
        }

        if (action.type === 'url') {
            return `<a href="${action.value}" class="${className}">${label}</a>`;
        }

        return '';
    }
}

module.exports = { Modal };
