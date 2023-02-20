export class CustomTableRowModel {
  constructor(
    public readonly id: number,
    public readonly columns: CustomTableRowItemModel[]
  ) {}
}

export class CustomTableRowItemModel {
  constructor(
    public readonly title: string,
    public readonly width?: string,
    public readonly minWidth?: string,
    public readonly maxWidth?: string
  ) {}
}
