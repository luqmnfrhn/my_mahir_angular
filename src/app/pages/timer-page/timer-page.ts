import { Component, computed, DestroyRef, inject, signal } from '@angular/core';
import { SharedModules } from '../../shared/shared-modules';

@Component({
  selector: 'app-timer-page',
  imports: [...SharedModules],
  templateUrl: './timer-page.html',
  styleUrl: './timer-page.scss',
})
export class TimerPage {
  readonly total = signal(15);
  readonly warnAt = 10;
  readonly dangerAt = 5;

  readonly secondsRemaining = signal(this.total());
  readonly formattedRemaining = computed(() => this.formattedTime(this.secondsRemaining()));

  constructor() {
    const timerId = setInterval(() => {
      this.secondsRemaining.update((v) => Math.max(v - 1, 0));
    }, 1000);

    const destroyRef = inject(DestroyRef);
    destroyRef.onDestroy(() => clearInterval(timerId));
  }

  refresh() {
    this.secondsRemaining.set(this.total());
  }

  setTimer() {
    const newTime = prompt('Enter new time in seconds:', this.total().toString());
    if (newTime) {
      const parsed = parseInt(newTime, 10);
      if (!isNaN(parsed) && parsed > 0) {
        this.total.set(parsed);
        this.refresh();
      }
    }
  }

  private formattedTime(totalSeconds: number) {
    return new Date(totalSeconds * 1000).toISOString().slice(14, 19);
  }
}
