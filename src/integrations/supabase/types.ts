export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      account_lockouts: {
        Row: {
          created_at: string
          email: string
          failed_attempts: number | null
          id: string
          locked_until: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          failed_attempts?: number | null
          id?: string
          locked_until?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          failed_attempts?: number | null
          id?: string
          locked_until?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      audit_logs: {
        Row: {
          action: string
          created_at: string
          details: Json | null
          id: string
          ip_address: unknown | null
          resource_id: string | null
          resource_type: string
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          details?: Json | null
          id?: string
          ip_address?: unknown | null
          resource_id?: string | null
          resource_type: string
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          details?: Json | null
          id?: string
          ip_address?: unknown | null
          resource_id?: string | null
          resource_type?: string
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      client_allowlist: {
        Row: {
          created_at: string
          email: string
          expires_at: string | null
          id: string
          invite_code: string | null
          invited_by: string | null
          status: string | null
        }
        Insert: {
          created_at?: string
          email: string
          expires_at?: string | null
          id?: string
          invite_code?: string | null
          invited_by?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          expires_at?: string | null
          id?: string
          invite_code?: string | null
          invited_by?: string | null
          status?: string | null
        }
        Relationships: []
      }
      client_intakes: {
        Row: {
          ada_prosecutor: string | null
          arraignment_date: string | null
          bail_info: Json | null
          biographical_info: Json | null
          case_facts: string | null
          charges: Json | null
          consent_given: boolean | null
          contact_info: Json | null
          court_name: string | null
          court_session: string | null
          created_at: string
          criminal_history: Json | null
          docket_number: string | null
          e_signature: Json | null
          education_info: Json | null
          emergency_contact: Json | null
          employment_info: Json | null
          family_info: Json | null
          google_doc_url: string | null
          id: string
          immigration_info: Json | null
          mailing_address: string | null
          middle_name: string | null
          next_court_date: string | null
          pdf_backup_url: string | null
          phone_numbers: Json | null
          progress_step: number | null
          representation_type: string | null
          ssn_last4: string | null
          status: string | null
          submitted_at: string | null
          substance_mental_health: Json | null
          updated_at: string
          uploaded_files: Json | null
          user_id: string
        }
        Insert: {
          ada_prosecutor?: string | null
          arraignment_date?: string | null
          bail_info?: Json | null
          biographical_info?: Json | null
          case_facts?: string | null
          charges?: Json | null
          consent_given?: boolean | null
          contact_info?: Json | null
          court_name?: string | null
          court_session?: string | null
          created_at?: string
          criminal_history?: Json | null
          docket_number?: string | null
          e_signature?: Json | null
          education_info?: Json | null
          emergency_contact?: Json | null
          employment_info?: Json | null
          family_info?: Json | null
          google_doc_url?: string | null
          id?: string
          immigration_info?: Json | null
          mailing_address?: string | null
          middle_name?: string | null
          next_court_date?: string | null
          pdf_backup_url?: string | null
          phone_numbers?: Json | null
          progress_step?: number | null
          representation_type?: string | null
          ssn_last4?: string | null
          status?: string | null
          submitted_at?: string | null
          substance_mental_health?: Json | null
          updated_at?: string
          uploaded_files?: Json | null
          user_id: string
        }
        Update: {
          ada_prosecutor?: string | null
          arraignment_date?: string | null
          bail_info?: Json | null
          biographical_info?: Json | null
          case_facts?: string | null
          charges?: Json | null
          consent_given?: boolean | null
          contact_info?: Json | null
          court_name?: string | null
          court_session?: string | null
          created_at?: string
          criminal_history?: Json | null
          docket_number?: string | null
          e_signature?: Json | null
          education_info?: Json | null
          emergency_contact?: Json | null
          employment_info?: Json | null
          family_info?: Json | null
          google_doc_url?: string | null
          id?: string
          immigration_info?: Json | null
          mailing_address?: string | null
          middle_name?: string | null
          next_court_date?: string | null
          pdf_backup_url?: string | null
          phone_numbers?: Json | null
          progress_step?: number | null
          representation_type?: string | null
          ssn_last4?: string | null
          status?: string | null
          submitted_at?: string | null
          substance_mental_health?: Json | null
          updated_at?: string
          uploaded_files?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      client_profiles: {
        Row: {
          client_number: string | null
          created_at: string
          id: string
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          client_number?: string | null
          created_at?: string
          id?: string
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          client_number?: string | null
          created_at?: string
          id?: string
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      content_embeddings: {
        Row: {
          chunk_index: number | null
          content_id: string
          content_text: string
          content_type: string
          created_at: string
          embedding: string | null
          id: string
          keywords: string[] | null
          metadata: Json | null
          practice_area: string | null
          title: string
          updated_at: string
        }
        Insert: {
          chunk_index?: number | null
          content_id: string
          content_text: string
          content_type: string
          created_at?: string
          embedding?: string | null
          id?: string
          keywords?: string[] | null
          metadata?: Json | null
          practice_area?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          chunk_index?: number | null
          content_id?: string
          content_text?: string
          content_type?: string
          created_at?: string
          embedding?: string | null
          id?: string
          keywords?: string[] | null
          metadata?: Json | null
          practice_area?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      ma_criminal_statutes: {
        Row: {
          chapter: string
          charge_name: string
          created_at: string
          full_description: string | null
          id: string
          section: string
          statute_code: string
        }
        Insert: {
          chapter: string
          charge_name: string
          created_at?: string
          full_description?: string | null
          id?: string
          section: string
          statute_code: string
        }
        Update: {
          chapter?: string
          charge_name?: string
          created_at?: string
          full_description?: string | null
          id?: string
          section?: string
          statute_code?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      binary_quantize: {
        Args: { "": string } | { "": unknown }
        Returns: unknown
      }
      check_account_lockout: {
        Args: { p_email: string }
        Returns: Json
      }
      halfvec_avg: {
        Args: { "": number[] }
        Returns: unknown
      }
      halfvec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      halfvec_send: {
        Args: { "": unknown }
        Returns: string
      }
      halfvec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      hnsw_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnsw_sparsevec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      hnswhandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_bit_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflat_halfvec_support: {
        Args: { "": unknown }
        Returns: unknown
      }
      ivfflathandler: {
        Args: { "": unknown }
        Returns: unknown
      }
      l2_norm: {
        Args: { "": unknown } | { "": unknown }
        Returns: number
      }
      l2_normalize: {
        Args: { "": string } | { "": unknown } | { "": unknown }
        Returns: unknown
      }
      log_audit_event: {
        Args: {
          p_user_id: string
          p_action: string
          p_resource_type: string
          p_resource_id?: string
          p_details?: Json
          p_ip_address?: unknown
          p_user_agent?: string
        }
        Returns: string
      }
      record_failed_login: {
        Args: { p_email: string }
        Returns: undefined
      }
      reset_failed_login: {
        Args: { p_email: string }
        Returns: undefined
      }
      search_content_by_similarity: {
        Args: {
          query_embedding: string
          match_threshold?: number
          match_count?: number
          filter_content_type?: string
          filter_practice_area?: string
        }
        Returns: {
          id: string
          content_id: string
          content_type: string
          title: string
          content_text: string
          practice_area: string
          similarity: number
        }[]
      }
      sparsevec_out: {
        Args: { "": unknown }
        Returns: unknown
      }
      sparsevec_send: {
        Args: { "": unknown }
        Returns: string
      }
      sparsevec_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
      vector_avg: {
        Args: { "": number[] }
        Returns: string
      }
      vector_dims: {
        Args: { "": string } | { "": unknown }
        Returns: number
      }
      vector_norm: {
        Args: { "": string }
        Returns: number
      }
      vector_out: {
        Args: { "": string }
        Returns: unknown
      }
      vector_send: {
        Args: { "": string }
        Returns: string
      }
      vector_typmod_in: {
        Args: { "": unknown[] }
        Returns: number
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
