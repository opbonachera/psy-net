import { Component, inject, TemplateRef, Input } from '@angular/core';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'modal-component',
	templateUrl: './modal.component.html',
})

export class ModalComponent {
	
	private modalService = inject(NgbModal);

	open(content: TemplateRef<any>) {
		this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result
	}

}