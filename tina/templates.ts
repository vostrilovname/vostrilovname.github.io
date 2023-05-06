import type { TinaField } from "tinacms";

export const EleventyNavigationFields: TinaField[] = [
  {
    type: "string",
    name: "key",
    label: "key",
    description: "",
    required: true
  },
  {
    type: "string",
    name: "parent",
    label: "parent",
    description: "",
    required: true
  },
  {
    type: "number",
    name: "order",
    label: "order",
    description: "",
    required: true
  },
];

export function LibraryFields(): TinaField[] {
  return [
    HeaderField,
    DescrField,
    {
      type: "object",
      name: "eleventyNavigation",
      label: "Настройки меню",
      description: "Обязательно заполнить!",
      fields: EleventyNavigationFields,
      required: true
    },
    TextField,
  ]
}

export function StoriesFields(): TinaField[] {
  return [
    HeaderField,
    DescrField,
    DateField,
    TextField,
    TagsField,
  ]
}

export function CinemaFields(): TinaField[] {
  return [
    HeaderField,
    DescrField,
    {
      ...TextField,
      type: "string",
      ui: {
        component: 'textarea',
      }
    },

  ] as TinaField[]
}

export function SpecialFields(): TinaField[] {
  return [
    HeaderField,
    DescrField,
    TextField
  ] as TinaField[]
}


/**
 * Date field
 */
const DateField: TinaField = {

  type: "datetime",
  name: "date",
  label: "Дата",
  description: "",
  required: true
}

/**
 * Title field
 */
const HeaderField: TinaField = {

  type: "string",
  name: "title",
  label: "Заголовок",
  description: "",
  required: true,

}

/**
 * Description field
 */
const DescrField: TinaField = {

  type: "string",
  name: "description",
  label: "Краткое описание",
  description: "Не более 155 символов",
  required: true,
  ui: {
    component: 'textarea',
  }

}

/**
 * Main content field
 */
const TextField: TinaField = {

  type: "rich-text",
  name: "body",
  label: "Документ",
  description: "Основной контент",
  isBody: true,

}

/**
 * Tags field
 */
const TagsField: TinaField = {

  type: "string",
  name: "tags",
  label: "Теги",
  description: "",
  required: true,
  list: true

}
