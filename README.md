# 🔘 Angular Toggle Playground

This project demonstrates a powerful and customizable `ToggleComponent` implemented as part of a **standalone Angular library**, with a `PlaygroundComponent` used to explore all features visually.

## 🛠️ Getting Started

```bash
git clone https://github.com/NatalyStroynov/toggle-playground.git
cd toggle-playground
npm install
ng serve
```

---

## 🚀 Live Demo

Run locally:

```bash
ng serve
```

Open in browser:
[http://localhost:4200](http://localhost:4200)

---

## 📂 Development

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.17.

### Development server

To run the Toggle Playground:

1. First build the toggle library:

   ```bash
   ng build uicomponents
   ```

2. Then run the dev server:

   ```bash
   ng serve
   ```

3. Navigate to `http://localhost:4200/` — the PlaygroundComponent will render the ToggleComponent with multiple examples.

The application will automatically reload if you change any of the source files.

---

## 🧱 Project Structure

```bash
root/
├── projects/
│   └── uicomponents/              # Angular library
│       └── src/lib/
│           └── components/
│               └── toggle/
│                   ├── toggle.component.ts
│                   ├── toggle.component.html
│                   ├── toggle.component.scss
│                   └── toggle.component.spec.ts
│           ├── uicomponents.component.ts
│           ├── uicomponents.component.spec.ts
│           ├── uicomponents.service.ts
│           └── uicomponents.service.spec.ts
├── src/
│   └── app/
│       ├── playground/
│       │   ├── playground.component.ts
│       │   ├── playground.component.html
│       │   ├── playground.component.scss
│       │   └── playground.component.spec.ts
│       ├── app.component.ts
│       ├── app.component.html
│       ├── app.component.scss
│       └── app.component.spec.ts
```

---

## 🎯 Features Demonstrated

### ✅ Label + Help Icon

```html
<ui-toggle
  label="Example"
  [showHelp]="true"
  helpTooltip="More info"
></ui-toggle>
```

---

### ✅ Label Wrapping & Truncation

```html
<ui-toggle label="Very long label that wraps"></ui-toggle>
<ui-toggle label="Very long label" [truncateLabel]="true"></ui-toggle>
```

---

### ✅ Spacing Customization

```html
<ui-toggle
  label="Custom spacing"
  labelSpacing="40px"
  verticalSpacing="24px"
></ui-toggle>
```

---

### ✅ Label Alignment

```html
<ui-toggle label="Top aligned" labelAlign="top"></ui-toggle>
```

---

### ✅ Clickable Area

```html
<ui-toggle label="Full clickable" [fullClickable]="true"></ui-toggle>
<ui-toggle label="Only toggle clickable" [fullClickable]="false"></ui-toggle>
```

---

### ✅ Single-Select (Radio Style)

```ts
selectedId = 2;
options = [1, 2, 3, 4, 5];
```

```html
<ui-toggle
  *ngFor="let id of options"
  [label]="'Option ' + id"
  [checked]="selectedId === id"
  (checkedChange)="selectedId = id"
/>
```

---

### ✅ "All" Toggle (Group Control)

```ts
group = [true, true, true];
all = true;

setAll(state: boolean) {
  this.group = this.group.map(() => state);
}

onChange() {
  this.all = this.group.every(Boolean);
}
```

```html
<ui-toggle label="All" [(checked)]="all" (checkedChange)="setAll(all)" />
<ui-toggle *ngFor="let val of group; let i = index" [(checked)]="group[i]" (checkedChange)="onChange()" />
```

---

### 📦 Using ToggleComponent in Other Projects

### 🔨 Generate the component (inside a library or app)

```bash
ng generate component toggle --standalone --export --flat --project=uicomponents
```

> This creates a standalone component and exports it directly from the library (no folder nesting).

### 🧩 Import and Use

Once built, the toggle component can be used like this:

```ts
import { UiToggleComponent } from 'uicomponents';

@Component({
  standalone: true,
  imports: [CommonModule, UiToggleComponent],
  template: `<ui-toggle label="Enable feature" [(checked)]="enabled"></ui-toggle>`
})
export class SomeComponent {
  enabled = false;
}
```

---

## 🧰 Built With

* Angular 17 standalone components
* SCSS module styling
* `@Input()` and `@Output()` APIs
* Visual layout with flexible CSS Grid/Flexbox

---

## 👩‍💻 Author

Built with ❤️ by **Nataly**

---

## 📄 License

MIT License
