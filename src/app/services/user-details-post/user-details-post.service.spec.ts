import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { UserDetailsPostService } from './user-details-post.service';

import { UserRegistration } from '../../interfaces/index';

describe('UserDetailsPostService', () => {
  let service: UserDetailsPostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserDetailsPostService]
    });
    service = TestBed.get(UserDetailsPostService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post data to the API', () => {
    const data: UserRegistration = {
      firstName: 'Peter',
      lastName: 'Pan',
      emailAddress: 'peter.pan@neverland.com',
      password: 'LostBoys'
    };

    service.post(data)
      .subscribe(() => { });

    const req = httpMock.expectOne(
      "https://demo-api.now.sh/users"
    );
    expect(req.request.method).toEqual("POST");
  });
});
