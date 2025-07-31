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

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

---

## 🧱 Project Structure

```bash
src/
├── app/
│   ├── playground/           # Visual examples for ToggleComponent
│   │   ├── playground.component.ts/html/scss
│   └── ui-toggle/ (library)  # Standalone ToggleComponent
│       ├── toggle.component.ts/html/scss
```

---

## 🎯 Features Demonstrated

### ✅ Label + Help Icon

Supports a label and optional help tooltip.

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

## 🧰 Built With

* Angular 17 standalone components
* SCSS module styling
* `@Input()` and `@Output()` APIs
* Visual layout with flexible CSS Grid/Flexbox

---


## 👩‍💻 Author

Built with ❤️ Nataly

---

## 📄 License

MIT License
