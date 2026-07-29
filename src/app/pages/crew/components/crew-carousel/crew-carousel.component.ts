import { Component, computed, inject, input, signal } from '@angular/core';
import { CrewMember } from './interface/crew-member.interface';
import { CrewCarouselService } from './service/crew-carousel.service';

@Component({
  selector: 'app-crew-carousel',
  imports: [],
  templateUrl: './crew-carousel.component.html',
  styleUrl: './crew-carousel.component.css',
})
export class CrewCarouselComponent {
  private service = inject(CrewCarouselService);
  private _selectedCrewMember = signal<number>(0);
  private _isCoolingDown = false;

  protected crew = signal<CrewMember[]>(this.service.getCrew());
  protected currentMember = computed(() => this.crew()[this._selectedCrewMember()]);
  protected readonly currentMemberIndex = computed(() => this._selectedCrewMember());

  public selectCrewMember(index: number): void {
    this._selectedCrewMember.set(index);
  }

  onWheel(event: WheelEvent): void {
    event.preventDefault();

    if (this._isCoolingDown)
      return;

    const direction = Math.sign(event.deltaY);
    const total = this.crew().length;

    if (direction > 0) {
      // Scroll Down -> Next Slide
      this._selectedCrewMember.update(idx => (idx + 1) % total);
      this.triggerCooldown();
    } else if (direction < 0) {
      // Scroll Up -> Previous Slide
      this._selectedCrewMember.update(idx => (idx - 1 + total) % total);
      this.triggerCooldown();
    }
  }

  private triggerCooldown(): void {
    this._isCoolingDown = true;
    setTimeout(() => {
      this._isCoolingDown = false;
    }, 500);
  }
}
