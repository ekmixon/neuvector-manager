import { Component, OnInit, Input } from '@angular/core';
import { DashboardSecurityEventsService } from '@routes/dashboard/thread-services/dashboard-security-events.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-security-events-panel',
  templateUrl: './top-security-events-panel.component.html',
  styleUrls: ['./top-security-events-panel.component.scss']
})
export class TopSecurityEventsPanelComponent implements OnInit {

  instructions: Array<string>;

  @Input() direction: string;

  constructor(
    public dashboardSecurityEventsService: DashboardSecurityEventsService,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.instructions = this.direction === 'source' ? [
      this.translate.instant('dashboard.help.top_security_events.txt1'),
      this.translate.instant('dashboard.help.top_security_events.txt2'),
      this.translate.instant('dashboard.help.top_security_events.txt2_1'),
      this.translate.instant('dashboard.help.top_security_events.txt2_1'),
      this.translate.instant('dashboard.help.top_security_events.txt2_1')
    ] : [
      this.translate.instant('dashboard.help.top_security_events.txt3'),
      this.translate.instant('dashboard.help.top_security_events.txt4'),
      this.translate.instant('dashboard.help.top_security_events.txt4_1'),
      this.translate.instant('dashboard.help.top_security_events.txt4_1'),
      this.translate.instant('dashboard.help.top_security_events.txt4_1')
    ];
  }

}
