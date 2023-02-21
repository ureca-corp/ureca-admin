import { ListLayoutTemplate } from "@/apps/global/ui/layout-templates";
import { SquareIconButton } from "@/common/components/icon-buttons";
import { css } from "@emotion/react";
import { AddRounded, SearchRounded } from "@mui/icons-material";
import { useMemberTableModels } from "../member/application/hooks";
import { ListViewCustomTable } from "./components";

export const ListView = () => {
  const { headerModels, itemModels } = useMemberTableModels();

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
      <ListViewCustomTable
        headerModels={headerModels}
        itemModels={itemModels}
      />
    </ListLayoutTemplate>
  );
};

const st = {
  subTitleRight: css`
    display: flex;
    gap: 8px;
  `,
};
