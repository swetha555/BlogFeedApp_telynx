/**
 * Example spec file demonstrating a Jasmine test.
 *
 * @see {@link https://jasmine.github.io/2.5/introduction}
 */

import { NO_ERRORS_SCHEMA } from "@angular/core";
import { TestBed } from "@angular/core/testing";
import { HomeComponent } from "./Home";

xdescribe("Home", function() {
  let component,
      fixture;

  beforeEach(function() {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });

  it("contains spec that returns true", function() {
    expect(true).toBe(true);
  });
});
