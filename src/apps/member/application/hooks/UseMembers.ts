import {
  CustomTableHeaderModel,
  CustomTableRowItemModel,
  CustomTableRowModel,
} from "@/common/components/custom-table/models";

export const useMembersTableModels = () => {
  const headerModels: CustomTableHeaderModel[] = [
    new CustomTableHeaderModel(1, "번호", "160px"),
    new CustomTableHeaderModel(2, "제목", "100%"),
    new CustomTableHeaderModel(3, "생성일", "360px"),
    new CustomTableHeaderModel(4, "필수 여부", "160px"),
    new CustomTableHeaderModel(5, "상태", "160px"),
  ];

  const itemModels: CustomTableRowModel[] = [
    new CustomTableRowModel(1, [
      new CustomTableRowItemModel("1", "160px"),
      new CustomTableRowItemModel("프로모션 정보 수신 동의", "100%"),
      new CustomTableRowItemModel("2022. 12. 21. 오후: 7:08:25", "360px"),
      new CustomTableRowItemModel("선택", "160px"),
      new CustomTableRowItemModel("공개", "160px"),
    ]),
    new CustomTableRowModel(2, [
      new CustomTableRowItemModel("2", "160px"),
      new CustomTableRowItemModel("개인정보 처리방침", "100%"),
      new CustomTableRowItemModel("2022. 12. 21. 오후: 7:08:25", "360px"),
      new CustomTableRowItemModel("선택", "160px"),
      new CustomTableRowItemModel("공개", "160px"),
    ]),
    new CustomTableRowModel(3, [
      new CustomTableRowItemModel("3", "160px"),
      new CustomTableRowItemModel("서비스 이용약관", "100%"),
      new CustomTableRowItemModel("2022. 12. 21. 오후: 7:08:25", "360px"),
      new CustomTableRowItemModel("선택", "160px"),
      new CustomTableRowItemModel("공개", "160px"),
    ]),
  ];

  return {
    headerModels,
    itemModels,
  };
};
