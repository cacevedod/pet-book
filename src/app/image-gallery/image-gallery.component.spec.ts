import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './image-gallery.component';
import { ImageService } from '../image.service';
import { FilterimagesPipe } from '../filterimages.pipe';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let imageService: ImageService = new ImageService();
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryComponent, FilterimagesPipe],
      providers: [{provide: ImageService, useValue: imageService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    spy = spyOn(imageService, 'getImages').and.returnValues([
      { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
      { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
      { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
      { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
      { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
    ]);    

    fixture = TestBed.createComponent(GalleryComponent); //permite hacer pruebas del dom
    component = fixture.componentInstance; //parte de typescript dentro del componente
    fixture.detectChanges(); //detecta los cambios realizados por haber instanciado el componente
  });

  it('Debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  describe('fixture', () => {
    
  });

  describe("ngOnChanges", () => {
    it('Cuando la lista de imágenes exite debe coinsidir con la cantidad de imágenes existentes', () => {
      expect(component.allImages.length).toBe(5);
    });
  });
});
