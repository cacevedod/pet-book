import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImageDetailComponent } from './image-details.component';
import { ImageService } from '../image.service';
import { ActivatedRoute } from '@angular/router';

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let mockService: ImageService = new ImageService();
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ],
      providers:[
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: () => 1,
            },
          },
        },
        { provide: ImageService, useValue: mockService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(mockService, 'getImage').and.returnValue({ "id": 1, "brand": "perro", "url": "testURL" });

    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe("ngOnInit", () => {
    it('Cuando la imagen exite debe retornar el json de la imagen', () => {
      expect(component.image).toEqual({ "id": 1, "brand": "perro", "url": "testURL" })
    });
  });

  describe('fixture', () => {
    it('Cuando se carga la vista, debe exisitr un elemento contenedor de imágenes con la clase img-container', () => {
      expect(fixture.nativeElement.querySelector('.img-container')).toBeDefined();
    });
  });
});