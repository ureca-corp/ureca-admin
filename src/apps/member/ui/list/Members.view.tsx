import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import {
  CustomTable,
  CustomTableContainer,
  CustomTableHeader,
  CustomTablePagination,
  CustomTableRow,
  CustomTableRowItem,
} from "@/common/components/custom-table";
import { SquareIconButton } from "@/common/components/icon-buttons";
import { css } from "@emotion/react";
import { AddRounded, SearchRounded } from "@mui/icons-material";
import { useMembersTableModels } from "../../application/hooks";

export const MembersView = () => {
  const { headerModels, itemModels } = useMembersTableModels();

  return (
    <ListLayoutTemplate
      mainTitle={"멤버관리"}
      subTitle={"목록"}
      subTitleRight={
        <div css={st.subTitleRight}>
          <SquareIconButton tooltip={"검색"}>
            <SearchRounded />
          </SquareIconButton>

          <SquareIconButton tooltip={"추가"}>
            <AddRounded />
          </SquareIconButton>
        </div>
      }
    >
      <CustomTableContainer>
        <CustomTable
          headers={headerModels.map((it) => (
            <CustomTableHeader key={it.id} model={it} />
          ))}
          rows={itemModels.map((it) => (
            <CustomTableRow key={it.id} onClick={() => {}}>
              {it.columns.map((model, index) => (
                <CustomTableRowItem key={`${it.id}-${index}`} model={model} />
              ))}
            </CustomTableRow>
          ))}
        />
        <CustomTablePagination />
      </CustomTableContainer>
    </ListLayoutTemplate>
  );
};

const st = {
  subTitleRight: css`
    display: flex;
    gap: 8px;
  `,
};
